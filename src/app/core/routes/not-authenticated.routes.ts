import { Routes } from "@angular/router";
import { LoginComponent } from "../../auth/login/login.component";
import { RegisterComponent } from "../../auth/register/register.component";
import { ResetPasswordComponent } from "../../auth/reset-password/reset-password.component";

export const notAuthenticatedRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
];
