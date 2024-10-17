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

  getAuthedUser() {
    return this.authedUser;
  }
}
