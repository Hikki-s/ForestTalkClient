import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import type { Observable } from "rxjs";
import { tap } from "rxjs";
import { API_URLS } from "@shared/constants/api-urls";
import { StorageService } from "@shared/services/storage/storage.service";
import { Router } from "@angular/router";
import type {
  TTokenResponse,
  TAuthValues,
} from "../../models/loginValues.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly storageService = inject(StorageService);
  private readonly router = inject(Router);

  private readonly accessTokenKey = "access_token";
  private readonly refreshTokenKey = "refresh_token";

  accessToken: string | null = null;
  refreshToken: string | null = null;

  constructor() {
    this.initializeToken();
  }

  private initializeToken(): void {
    this.accessToken = this.storageService.getItem<string>(this.accessTokenKey);
    this.refreshToken = this.storageService.getItem<string>(
      this.refreshTokenKey
    );
  }

  private storeTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.storageService.setItem(this.accessTokenKey, accessToken);
    this.storageService.setItem(this.refreshTokenKey, refreshToken);
  }

  get isAuth() {
    return !!this.accessToken;
  }

  login(userData: TAuthValues): Observable<TTokenResponse> {
    return this.http
      .post<TTokenResponse>(API_URLS.AUTH_LOGIN, {
        email: userData.email,
        password_hash: userData.password,
      })
      .pipe(tap((res) => this.storeTokens(res.accessToken, res.refreshToken)));
  }

  refreshAccessToken(): Observable<TTokenResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.refreshToken}`,
    });
    return this.http
      .post<TTokenResponse>(API_URLS.AUTH_REFRESH, {}, { headers })
      .pipe(tap((res) => this.storeTokens(res.accessToken, res.refreshToken)));
  }

  deleteTokens() {
    this.accessToken = null;
    this.refreshToken = null;
    this.storageService.removeItem(this.accessTokenKey);
    this.storageService.removeItem(this.refreshTokenKey);
    this.router.navigate(["/login"]);
  }

  logout(): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.refreshToken}`,
    });
    return this.http
      .post<void>(API_URLS.AUTH_LOGOUT, {}, { headers })
      .pipe(tap(() => this.deleteTokens()));
  }
}
