import { Action } from "@ngrx/store";

export enum routerActionTypes {
  GO = "[Router] Go"
}

export class Go implements Action {
  readonly type = routerActionTypes.GO;
  constructor(
    public payload: {
      path: any[];
    }
  ) {}
}

export type RouterActions = Go;
