import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly authedUser = {
    id: "0",
    role: undefined,
    isAuthenticated: false,
  };

  getAuthedUser() {
    return this.authedUser;
  }
}
