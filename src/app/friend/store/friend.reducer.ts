import { Friend } from "../friend";
import { FriendActions, FriendActionTypes } from "./friend.action";

export interface FriendState {
  entities: { [id: number]: Friend };
  loaded: boolean;
  loading: boolean;
}

export const initialState: FriendState = {
  entities: {},
  loaded: false,
  loading: false
};

export function friendReducer(
  state: FriendState = initialState,
  action: FriendActions
) {
  switch (action.type) {
    case FriendActionTypes.LoadFriends: {
      return {
        ...state,
        loading: true
      };
    }

    case FriendActionTypes.LoadFriendsSuccess: {
      const entities = action.payload.reduce(
        (acc, friend: Friend) => ({
          ...acc,
          [friend.id]: friend
        }),
        {}
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }

    // case FriendActionTypes.AddExpense: {
    //   const { expense, id } = action.payload;
    //   const entities = {
    //     ...state.entities,
    //     [id]: {
    //       ...state.entities[id],
    //       expense: state.entities[id].expense + expense
    //     }
    //   };
    //   return {
    //     ...state,
    //     entities
    //   };
    // }

    case FriendActionTypes.LoadFriendSuccess:
    case FriendActionTypes.UpdateFriendSuccess: {
      const friend = action.payload;
      const entities = {
        ...state.entities,
        [friend.id]: friend
      };
      return {
        ...state,
        entities
      };
    }
  }

  return state;
}
