import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { SessionService } from "./session.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private session: SessionService) {}

  canActivate(): boolean {
    return this.session.isAdmin();
  }
}
