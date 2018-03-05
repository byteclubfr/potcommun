import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Friend } from "../../friend";

@Component({
  selector: "bc-friend-table",
  templateUrl: "./friend-table.component.html",
  styleUrls: ["./friend-table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendTableComponent implements OnInit {
  @Input() friends: Array<Friend>;

  constructor() {}

  ngOnInit() {}
}
