import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { Friend } from "../../friend";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "bc-friend-card",
  templateUrl: "./friend-card.component.html",
  styleUrls: ["./friend-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendCardComponent {
  @Input() friend: Friend;
  @Output() addExpense = new EventEmitter<number>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      expense: new FormControl("", Validators.required)
    });
  }

  addMoney() {
    if (this.form.invalid) return;
    this.addExpense.emit(this.form.controls.expense.value);
    this.form.reset();
  }
}
