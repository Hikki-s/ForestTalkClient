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
  TuiInputModule,
  TuiInputPasswordModule,
} from "@taiga-ui/kit";
import { interval, map, scan, startWith } from "rxjs";
import { tuiIsFalsy } from "@taiga-ui/cdk";
import { TuiErrorModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { passwordValidator } from "@shared/validators/password/password.validator";
import { confirmPasswordValidator } from "@shared/validators/confirm-password/confirm-password.validator";

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
      },
    },
  ],
})
export class RegisterComponent {
  readonly registrationForm = new FormGroup({
    email: new FormControl<string>("", {
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
    passwordRepeat: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required, confirmPasswordValidator("password")],
    }),
  });
}
