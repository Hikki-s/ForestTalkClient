import type { CanActivateFn } from "@angular/router";
import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../../../auth/shared/services/auth/auth.service";

export const authenticatedRouteGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getAuthedUser().isAuthenticated) {
    return true;
  }
  return router.parseUrl("/login");
};
