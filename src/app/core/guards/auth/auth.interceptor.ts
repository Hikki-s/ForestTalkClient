import type {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, switchMap, throwError } from "rxjs";
import { Logger } from "@shared/lib/logger/logger";
import { AuthService } from "../../../auth/shared/services/auth/auth.service";

let isRefreshing = false;

const addToken = (req: HttpRequest<any>, accessToken: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const refreshTokenAndProceed = (
  authService: AuthService,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  if (!isRefreshing) {
    isRefreshing = true;
    return authService.refreshAccessToken().pipe(
      switchMap((res) => {
        isRefreshing = false;
        return next(addToken(req, res.accessToken));
      })
    );
  }
  return next(addToken(req, authService.accessToken!));
};
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.accessToken;

  if (!accessToken) {
    return next(req);
  }

  if (isRefreshing) {
    return refreshTokenAndProceed(authService, req, next);
  }

  return next(addToken(req, accessToken)).pipe(
    catchError((error) => {
      if (error.status === 401) {
        Logger.api.error(error);
        return refreshTokenAndProceed(authService, req, next);
      }
      return throwError(error);
    })
  );
};
