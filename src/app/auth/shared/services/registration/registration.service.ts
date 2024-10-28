import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import type { Observable } from "rxjs";
import type {
  TRegistrationResponse,
  TUserRegistrationValues,
} from "../../models/registrationValues.interface";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  // register
  // check-email
  private readonly http = inject(HttpClient);
  private readonly ApiURL = "https://forest-talk-api.onrender.com/api/auth";

  register(
    userData: TUserRegistrationValues
  ): Observable<TRegistrationResponse> {
    return this.http.post<TRegistrationResponse>(
      `${this.ApiURL}/register`,
      userData
    );
  }
}
