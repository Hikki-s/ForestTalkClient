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
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTextareaModule,
} from "@taiga-ui/kit";
import { hashPassword } from "@shared/helpers/hash-password";
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLinkModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { emailValidator } from "@shared/validators/email/email.validator";
import { Router, RouterLink } from "@angular/router";
import { finalize } from "rxjs";
import { Logger } from "@shared/lib/logger/logger";
import { AuthService } from "../shared/services/auth/auth.service";
import type { TAuthValues } from "../shared/models/loginValues.interface";

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
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

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
    this.loading.set(true);
    this.loginForm.disable();
    const formData: TAuthValues = {
      email: this.loginForm.controls.email.value,
      password: hashPassword(this.loginForm.controls.password.value),
    };
    this.authService
      .login(formData)
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.loginForm.enable();
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(["/feed"]);
        },
        error: () => {
          Logger.api.error("Произошла ошибка");
        },
      });
  }
}
