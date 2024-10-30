import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import type { Observable } from "rxjs";
import { API_URLS } from "@shared/constants/api-urls";
import type {
  TRegistrationResponse,
  TUserRegistrationValues,
} from "../../models/registrationValues.interface";

export class RegistrationService {
  private readonly http = inject(HttpClient);

  register(
    userData: TUserRegistrationValues
  ): Observable<TRegistrationResponse> {
    return this.http.post<TRegistrationResponse>(API_URLS.AUTH_REGISTER, {
      email: userData.email,
      password_hash: userData.password,
      first_name: userData.firstName,
      last_name: userData.lastName,
      patronymic: userData.patronymic,
      birth_date: userData.birthDate,
      bio: userData.bio,
    });
  }

  checkEmail(email: string): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(API_URLS.CHECK_EMAIL, {
      params: { email },
    });
  }
}
