import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { FriendState } from "../store/friend.reducer";
import { selectFriendLoaded } from "../store/friend.selector";
import { LoadFriends } from "../store/friend.action";

import { tap } from "rxjs/operators/tap";
import { filter } from "rxjs/operators/filter";
import { take } from "rxjs/operators/take";

@Injectable()
export class LoadFriendsGuard implements CanActivate {
  constructor(private store: Store<FriendState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(selectFriendLoaded).pipe(
      tap(loaded => {
        if (!loaded) this.store.dispatch(new LoadFriends());
      }),
      filter(loaded => !!loaded), // on ne répond au guard que du positif ;)
      take(1) // une fois que c'est chargé, c'est chargé
    );
  }
}
