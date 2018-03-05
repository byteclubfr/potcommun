import { Injectable } from "@angular/core";

@Injectable()
export class SessionService {
  admin: boolean = false;
  constructor() {}

  isAdmin(): boolean {
    return this.admin;
  }

  toggleAdmin() {
    this.admin = !this.admin;
  }
}
