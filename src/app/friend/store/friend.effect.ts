import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { FriendService } from "../friend.service";
import {
  FriendActionTypes,
  LoadFriendsSuccess,
  AddExpense,
  UpdateFriend,
  UpdateFriendSuccess,
  LoadFriend,
  LoadFriendSuccess
} from "./friend.action";

import { Store, select } from "@ngrx/store";
import { FriendState } from "./friend.reducer";
import { selectFriends, selectFriendEntities } from "./friend.selector";

import { concatMap } from "rxjs/operators/concatMap";
import { map } from "rxjs/operators/map";
import { tap } from "rxjs/operators/tap";
import { catchError } from "rxjs/operators/catchError";
import { Friend } from "../friend";
import { Go } from "../../store/router.action";

@Injectable()
export class FriendEffects {
  constructor(
    private actions$: Actions,
    private friendService: FriendService,
    private store: Store<FriendState>
  ) {}

  @Effect()
  loadFriends$ = this.actions$.pipe(
    ofType(FriendActionTypes.LoadFriends),
    concatMap(() => this.friendService.getFriends()),
    map(friends => new LoadFriendsSuccess(friends))
  );
  // @TODO catchError(error => of(new actions.LoadInfosFail(error)))

  @Effect()
  UpdateFriend$ = this.actions$.pipe(
    ofType(FriendActionTypes.UpdateFriend, FriendActionTypes.AddExpense),
    map((action: UpdateFriend | AddExpense) => action.payload),
    concatMap((friend: Friend) => this.friendService.saveFriend(friend)),
    map((friend: Friend) => new UpdateFriendSuccess(friend))
  );

  // @Effect()
  // UpdateFriendSucess$ = this.actions$.pipe(
  //   ofType(FriendActionTypes.UpdateFriendSuccess),
  //   map(() => new Go({ path: ["/friends/list"] }))
  // );

  @Effect()
  LoadFriend$ = this.actions$.pipe(
    ofType(FriendActionTypes.LoadFriend),
    map((action: LoadFriend) => action.payload),
    concatMap((id: number) => this.friendService.getFriend(id)),
    map((friend: Friend) => new LoadFriendSuccess(friend))
  );
}
