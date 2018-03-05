import { createSelector, createFeatureSelector } from "@ngrx/store";

import { FriendState } from "./friend.reducer";
import { emptyFriend, Friend } from "../friend";
import { transactions } from "../transaction";

export const selectFeature = createFeatureSelector<FriendState>("friend");
export const selectRoute = createFeatureSelector("routerReducer");

export const selectLoading = createSelector(
  selectFeature,
  (state: FriendState) => state.loading
);

export const selectFriendEntities = createSelector(
  selectFeature,
  (state: FriendState) => state.entities
);

export const selectFriends = createSelector(selectFriendEntities, entities =>
  Object.keys(entities).map(id => entities[id])
);

export const selectFriendLoaded = createSelector(
  selectFeature,
  (state: FriendState) => state.loaded
);

export const selectTransactions = createSelector(selectFriends, friends =>
  transactions(friends)
);

export const selectRouteId = createSelector(selectRoute, (route: any) =>
  parseInt(route.state.params.id, 10)
);

export const selectCurrentFriend = createSelector(
  selectFriendEntities,
  selectRouteId,
  (entities, id) => entities[id] || emptyFriend
);

export const selectTotal = createSelector(
  selectFriends,
  (friends: Array<Friend>) =>
    friends.reduce((acc, friend) => acc + friend.expense, 0)
);
