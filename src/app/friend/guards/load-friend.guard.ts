import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { FriendState } from "../store/friend.reducer";
import {
  selectFriendLoaded,
  selectFriendEntities
} from "../store/friend.selector";
import { LoadFriends, LoadFriend } from "../store/friend.action";

import { tap } from "rxjs/operators/tap";
import { map } from "rxjs/operators/map";
import { filter } from "rxjs/operators/filter";
import { take } from "rxjs/operators/take";

@Injectable()
export class LoadFriendGuard implements CanActivate {
  constructor(private store: Store<FriendState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = parseInt(next.paramMap.get("id"), 10);

    return this.store.select(selectFriendEntities).pipe(
      map(entities => entities[id]),
      tap(friend => {
        if (!friend) this.store.dispatch(new LoadFriend(id));
      }),
      map(friend => !!friend),
      filter(isLoaded => !!isLoaded),
      take(1)
    );
  }
}
