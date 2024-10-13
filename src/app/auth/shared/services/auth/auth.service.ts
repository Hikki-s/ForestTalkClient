import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authedUser = {
    id: "0",
    role: "admin",
    isAuthenticated: true,
  };

  private nonAuthedUser = {
    isAuthenticated: false,
  };

  getAuthedUser() {
    return this.authedUser;
  }

  getNonAuthedUser() {
    return this.nonAuthedUser;
  }
}
