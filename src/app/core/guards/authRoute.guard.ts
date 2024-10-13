import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../../auth/shared/services/auth/auth.service";

export const authRouteGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getAuthedUser().isAuthenticated) {
    return true;
  } else {
    return router.parseUrl("/login");
  }
};
