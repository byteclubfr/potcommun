import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { FriendService } from "../../friend.service";

import { map } from "rxjs/operators/map";
import { tap } from "rxjs/operators/tap";
import { concatMap } from "rxjs/operators/concatMap";
import { Observable } from "rxjs/Observable";
import { Friend } from "../../friend";
import { Store } from "@ngrx/store";
import { FriendState } from "../../store/friend.reducer";
import { selectCurrentFriend } from "../../store/friend.selector";
import { UpdateFriend } from "../../store/friend.action";

@Component({
  selector: "bc-friend-record",
  templateUrl: "./friend-record.component.html",
  styleUrls: ["./friend-record.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendRecordComponent implements OnInit {
  friend$: Observable<Friend>;
  constructor(private store: Store<FriendState>) {}

  ngOnInit() {
    this.friend$ = this.store.select(selectCurrentFriend);
  }

  save(friend: Friend) {
    this.store.dispatch(new UpdateFriend(friend));
  }
}
