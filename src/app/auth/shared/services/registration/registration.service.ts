import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import {
  TRegistrationResponse,
  TUserRegistrationValues,
} from "../../models/registrationValues.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  //register
  //check-email
  private readonly http = inject(HttpClient);
  private readonly API_URL = "https://forest-talk-api.onrender.com/api/auth";

  register(
    userData: TUserRegistrationValues
  ): Observable<TRegistrationResponse> {
    return this.http.post<TRegistrationResponse>(
      `${this.API_URL}/register`,
      userData
    );
  }
}
