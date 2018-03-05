import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AvatarInputComponent } from "./input/input.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarInputComponent],
  exports: [AvatarInputComponent]
})
export class AvatarModule {}
