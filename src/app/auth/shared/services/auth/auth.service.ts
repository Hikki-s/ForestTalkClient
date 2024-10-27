import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly authedUser = {
    id: "0",
    role: undefined,
    isAuthenticated: true,
  };

  getAuthedUser() {
    return this.authedUser;
  }
}
