import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators/map";
import { tap } from "rxjs/operators/tap";

import { routerActionTypes, Go, RouterActions } from "./router.action";

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false }) // important : cet effet ne dispatche pas d'action
  navigate$ = this.actions$.pipe(
    ofType(routerActionTypes.GO),
    map((action: RouterActions) => action.payload),
    tap(({ path }) => {
      // query: queryParams, extras
      this.router.navigate(path); // , { queryParams, ...extras }
    })
  );
}
