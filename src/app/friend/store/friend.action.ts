import { Action } from "@ngrx/store";
import { Friend } from "../friend";

export enum FriendActionTypes {
  LoadFriends = "[Friend] Load Friends",
  LoadFriendsSuccess = "[Friend] Load Success",
  AddExpense = "[Friend] Add Expense",
  UpdateFriend = "[Friend] Update Friend",
  UpdateFriendSuccess = "[Friend] Update Friend Success",
  LoadFriend = "[Friend] Load Friend",
  LoadFriendSuccess = "[Friend] Load Friend Success"
}

export class LoadFriends implements Action {
  readonly type = FriendActionTypes.LoadFriends;
}

export class LoadFriendsSuccess implements Action {
  readonly type = FriendActionTypes.LoadFriendsSuccess;
  constructor(public payload: Array<Friend>) {}
}

export class AddExpense implements Action {
  readonly type = FriendActionTypes.AddExpense;
  constructor(public payload: Friend) {}
}

export class UpdateFriend implements Action {
  readonly type = FriendActionTypes.UpdateFriend;
  constructor(public payload: Friend) {}
}

export class UpdateFriendSuccess implements Action {
  readonly type = FriendActionTypes.UpdateFriendSuccess;
  constructor(public payload: Friend) {}
}

export class LoadFriend implements Action {
  readonly type = FriendActionTypes.LoadFriend;
  constructor(public payload: number) {}
}

export class LoadFriendSuccess implements Action {
  readonly type = FriendActionTypes.LoadFriendSuccess;
  constructor(public payload: Friend) {}
}

export type FriendActions =
  | LoadFriends
  | LoadFriendsSuccess
  | AddExpense
  | UpdateFriend
  | UpdateFriendSuccess
  | LoadFriend
  | LoadFriendSuccess;
