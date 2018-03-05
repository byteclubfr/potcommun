import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FriendService } from "../../friend.service";
import { Observable } from "rxjs/Observable";
import { concatMap } from "rxjs/operators/concatMap";
import { Friend } from "../../friend";

@Component({
  selector: "bc-friend-list",
  templateUrl: "./friend-list.component.html",
  styleUrls: ["./friend-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendListComponent implements OnInit {
  friends$: Observable<Friend[]>;
  constructor(private friendService: FriendService) {}

  ngOnInit() {
    this.friends$ = this.friendService.getFriends();
  }

  addFriend() {}
}
