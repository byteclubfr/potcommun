import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Friend } from "../../friend";

import { Store } from "@ngrx/store";
import { FriendState } from "../../store/friend.reducer";
import { AddExpense } from "../../store/friend.action";
import {
  selectFriends,
  selectTransactions,
  selectTotal
} from "../../store/friend.selector";
import { Transaction } from "../../transaction";

@Component({
  selector: "bc-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  friends$: Observable<Friend[]>;
  transactions$: Observable<Array<Transaction>>;
  total$: Observable<number>;

  constructor(private store: Store<FriendState>) {}

  ngOnInit() {
    this.friends$ = this.store.select(selectFriends);
    this.transactions$ = this.store.select(selectTransactions);
    this.total$ = this.store.select(selectTotal);
  }

  addExpense(friend: Friend, expense: number) {
    this.store.dispatch(
      new AddExpense({ ...friend, expense: friend.expense + expense })
    );
  }
}
