import { Component, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  TUI_VALIDATION_ERRORS,
  TuiFieldErrorPipeModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTextareaModule,
} from "@taiga-ui/kit";
import { finalize, interval, map, scan, startWith } from "rxjs";
import { TuiDay, tuiIsFalsy } from "@taiga-ui/cdk";
import {
  TuiAlertService,
  TuiButtonModule,
  TuiErrorModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { passwordValidator } from "@shared/validators/password/password.validator";
import { confirmPasswordValidator } from "@shared/validators/confirm-password/confirm-password.validator";
import { emailValidator } from "@shared/validators/email/email.validator";
import { hashPassword } from "@shared/helpers/hash-password";
import { convertDateToISO } from "@shared/helpers/convert-date-to-ISO";
import { Router } from "@angular/router";
import { Logger } from "@shared/lib/logger/logger";
import { RegistrationService } from "../shared/services/registration/registration.service";
import type { TUserRegistrationValues } from "../shared/models/registrationValues.interface";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    TuiTextareaModule,
    TuiInputDateModule,
    TuiButtonModule,
    TuiModeModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.less",
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно для заполнения",
        invalidEmail: "Неверный формат электронной почты",
        maxlength: ({ requiredLength }: { requiredLength: string }) =>
          `Максимальная длина — ${requiredLength} символов`,
        minlength: ({ requiredLength }: { requiredLength: string }) =>
          `Максимальная длина — ${requiredLength} символов`,
        invalidPassword: interval(2000).pipe(
          scan(tuiIsFalsy, false),
          map((val) =>
            val
              ? "Неверный формат пароля"
              : "Пароль должен состоять из латинских букв, содержать заглавные и строчные буквы, а также один спецсимвол и одну цифру"
          ),
          startWith("Неверный формат пароля")
        ),
        passwordsDoNotMatch: "Пароли не совпадают",
      },
    },
    RegistrationService,
  ],
})
export class RegisterComponent {
  private readonly registrationService = inject(RegistrationService);
  private readonly alert = inject(TuiAlertService);
  private readonly router = inject(Router);
  currentRegistrationStep = 0;
  readonly minBirthDate = TuiDay.currentLocal().append({ year: -14 });

  readonly maxBirthDate = TuiDay.currentLocal().append({ year: -120 });

  readonly loading = signal(false);

  readonly registrationForm = new FormGroup({
    firstStep: new FormGroup(
      {
        email: new FormControl<string>("", {
          nonNullable: true,
          validators: [Validators.required, emailValidator],
        }),

        password: new FormControl<string>("", {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.maxLength(25),
            Validators.minLength(8),
            passwordValidator,
          ],
        }),

        confirmPassword: new FormControl<string>("", {
          nonNullable: true,
        }),
      },

      { validators: [confirmPasswordValidator] }
    ),

    firstName: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required],
    }),

    lastName: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required],
    }),

    patronymic: new FormControl<string>(""),

    birthDate: new FormControl<TuiDay>(
      TuiDay.currentLocal().append({ year: -14 }),
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    ),

    bio: new FormControl<string>(""),
  });

  onSubmit() {
    this.loading.set(true);
    this.registrationForm.disable();
    const formData: TUserRegistrationValues = {
      email: this.registrationForm.controls.firstStep.controls.email.value,
      password: hashPassword(
        this.registrationForm.controls.firstStep.controls.password.value
      ),
      firstName: this.registrationForm.controls.firstName.value,
      lastName: this.registrationForm.controls.lastName.value,
      patronymic: this.registrationForm.controls.patronymic.value,
      birthDate: convertDateToISO(
        this.registrationForm.controls.birthDate.value
      ),
      bio: this.registrationForm.controls.bio.value,
    };
    this.registrationService
      .register(formData)
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.registrationForm.enable();
        })
      )
      .subscribe({
        next: () => {
          this.alert
            .open("<strong>Регистрация прошла успешно!</strong>", {
              label: "Поздравляем!:",
              status: "success",
              autoClose: 5000,
            })
            .subscribe();
          this.router.navigate(["/login"]);
        },
        error: () => {
          Logger.api.error("Ошибка регистрации");
          this.showApiError();
        },
      });
  }

  nextStep() {
    if (this.currentRegistrationStep < 1) {
      this.currentRegistrationStep++;
    }
  }

  prevStep() {
    if (this.currentRegistrationStep > 0) {
      this.currentRegistrationStep--;
    }
  }

  showApiError(): void {
    this.alert
      .open("<strong>Произошла ошибка. Попробуйте снова.</strong>", {
        label: "Ошибка:",
        status: "error",
        autoClose: 5000,
      })
      .subscribe();
  }

  checkEmail() {
    this.loading.set(true);
    this.registrationForm.disable();
    this.registrationService
      .checkEmail(this.registrationForm.controls.firstStep.controls.email.value)
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.registrationForm.enable();
        })
      )
      .subscribe({
        next: (res) => {
          if (!res.exists) {
            this.nextStep();
          } else {
            this.alert
              .open(
                "<strong>Пользователь с таким email-ом уже зарегистрирован!</strong>",
                {
                  label: "Ошибка:",
                  status: "error",
                  autoClose: 5000,
                }
              )
              .subscribe();
          }
        },
        error: () => {
          Logger.api.error("Ошибка проверки почты");
          this.showApiError();
        },
      });
  }
}
