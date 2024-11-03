import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
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
  TuiTextareaModule,
} from "@taiga-ui/kit";
import { TUserLoginValues } from "../shared/models/loginValues.interface";
import { hashPassword } from "@shared/helpers/hash-password";
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLinkModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { emailValidator } from "@shared/validators/email/email.validator";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    RouterLink,
    TuiLinkModule,
    TuiModeModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.less",
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно для заполнения",
        invalidEmail: "Неверный формат электронной почты",
      },
    },
  ],
})
export class LoginComponent {
  readonly loading = signal(false);

  readonly loginForm = new FormGroup({
    email: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required, emailValidator],
    }),
    password: new FormControl<string>("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    // this.loading.set(true);
    // this.loginForm.disable();

    const formData: TUserLoginValues = {
      email: this.loginForm.controls.email.value,
      password: hashPassword(this.loginForm.controls.password.value),
    };
  }
}
