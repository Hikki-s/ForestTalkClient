import type {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, switchMap, catchError, throwError } from "rxjs";
import { Logger } from "@shared/lib/logger/logger";
import { API_URLS } from "@shared/constants/api-urls";
import { AuthService } from "../../services/auth/auth.service";

let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

const addToken = (
  req: HttpRequest<any>,
  accessToken: string
): HttpRequest<any> => {
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
): Observable<HttpEvent<any>> => {
  if (!isRefreshing) {
    isRefreshing = true;
    return authService.refreshAccessToken().pipe(
      switchMap((res) => {
        isRefreshing = false;
        authService.accessToken = res.accessToken;
        refreshSubscribers.forEach((callback) => callback(res.accessToken));
        refreshSubscribers = [];
        return next(addToken(req, res.accessToken));
      }),
      catchError((error) => {
        isRefreshing = false;
        Logger.api.error("Произошла ошибка обновления токена");
        refreshSubscribers = [];
        authService.deleteTokens();
        return throwError(() => error);
      })
    );
  }
  return new Observable<HttpEvent<any>>((observer) => {
    refreshSubscribers.push((token: string) => {
      next(addToken(req, token)).subscribe({
        next: (event) => observer.next(event),
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });
    });
  });
};

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.accessToken;

  const excludedUrls = [API_URLS.AUTH_LOGOUT, API_URLS.AUTH_REFRESH];

  if (excludedUrls.includes(req.url)) {
    return next(req);
  }

  if (!accessToken) {
    return next(req);
  }

  if (isRefreshing) {
    return refreshTokenAndProceed(authService, req, next);
  }

  const authReq = addToken(req, accessToken);

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        Logger.api.error(error);
        return refreshTokenAndProceed(authService, req, next);
      }
      return throwError(() => error);
    })
  );
};
