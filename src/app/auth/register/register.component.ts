import { ChangeDetectionStrategy, Component } from "@angular/core";
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
  TuiStepperModule,
  TuiTextareaModule,
} from "@taiga-ui/kit";
import { interval, map, scan, startWith } from "rxjs";
import {
  TuiDay,
  tuiIsFalsy,
  tuiMarkControlAsTouchedAndValidate,
} from "@taiga-ui/cdk";
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { passwordValidator } from "@shared/validators/password/password.validator";
import { confirmPasswordValidator } from "@shared/validators/confirm-password/confirm-password.validator";
import { ageValidator } from "@shared/validators/age/age.validator";

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
    TuiStepperModule,
    TuiTextareaModule,
    TuiInputDateModule,
    TuiButtonModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно для заполнения",
        email: "Неверный формат электронной почты",
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
        underage: "Минимальный возраст регистрации - 14 лет!",
        overage: "Минимальный возраст регистрации - 120 лет!",
      },
    },
  ],
})
export class RegisterComponent {
  currentRegistrationStep = 0;

  readonly registrationForm = new FormGroup({
    firstStep: new FormGroup({
      login: new FormControl<string>("", {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
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
        validators: [confirmPasswordValidator],
      }),
    }),

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
        validators: [Validators.required, ageValidator],
      }
    ),
    bio: new FormControl<string>(""),
  });

  private nextStep() {
    if (this.currentRegistrationStep < 1) {
      this.currentRegistrationStep++;
    }
  }

  prevStep() {
    if (this.currentRegistrationStep > 0) {
      this.currentRegistrationStep--;
    }
  }

  validFirstStep() {
    tuiMarkControlAsTouchedAndValidate(
      this.registrationForm.controls.firstStep
    );
    if (this.registrationForm.controls.firstStep.valid) {
      this.nextStep();
    }
  }

  submit() {
    return null;
  }
}
