import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "avatar-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AvatarInputComponent,
      multi: true
    }
  ]
})
export class AvatarInputComponent implements OnInit, ControlValueAccessor {
  @Input() avatars: Array<string>;
  value: string;
  onChange: (avatar: string) => void;

  constructor() {}

  ngOnInit() {}

  writeValue(value: string) {
    this.value = value;
  }
  registerOnChange(fn: (avatar: string) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {}

  select(avatar: string) {
    this.value = avatar;
    this.onChange(avatar);
  }
}
