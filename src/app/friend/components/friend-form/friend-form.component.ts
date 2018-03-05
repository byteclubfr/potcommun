import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { Friend } from "../../friend";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "bc-friend-form",
  templateUrl: "./friend-form.component.html",
  styleUrls: ["./friend-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendFormComponent implements OnInit {
  @Input() friend: Friend;
  @Output() save = new EventEmitter<Friend>();
  avatars = [
    "/assets/users/users-1.svg",
    "/assets/users/users-2.svg",
    "/assets/users/users-3.svg",
    "/assets/users/users-4.svg",
    "/assets/users/users-5.svg",
    "/assets/users/users-6.svg",
    "/assets/users/users-7.svg",
    "/assets/users/users-8.svg",
    "/assets/users/users-9.svg",
    "/assets/users/users-10.svg",
    "/assets/users/users-11.svg",
    "/assets/users/users-12.svg",
    "/assets/users/users-13.svg",
    "/assets/users/users-14.svg",
    "/assets/users/users-15.svg",
    "/assets/users/users-16.svg"
  ];

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.email),
      avatar: new FormControl("")
    });
  }

  ngOnInit() {
    this.form.patchValue(this.friend);
  }

  submit() {
    if (!this.form.valid) return;
    this.save.emit({
      ...this.friend,
      ...this.form.value
    });
  }
}
