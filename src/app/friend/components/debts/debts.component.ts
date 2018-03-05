import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Transaction } from "../../transaction";
import { Friend } from "../../friend";

@Component({
  selector: "bc-debts",
  templateUrl: "./debts.component.html",
  styleUrls: ["./debts.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebtsComponent {
  @Input() transactions: Array<Transaction>;
}
