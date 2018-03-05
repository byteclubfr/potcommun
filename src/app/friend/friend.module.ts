import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { FriendRoutingModule } from "./friend-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FriendCardComponent } from "./components/friend-card/friend-card.component";
import { FriendListComponent } from "./components/friend-list/friend-list.component";
import { FriendTableComponent } from "./components/friend-table/friend-table.component";
import { FriendRecordComponent } from "./components/friend-record/friend-record.component";
import { FriendFormComponent } from "./components/friend-form/friend-form.component";
import { DebtsComponent } from "./components/debts/debts.component";
import { LoadFriendsGuard } from "./guards/load-friends.guard";
import { LoadFriendGuard } from "./guards/load-friend.guard";
import { FriendService } from "./friend.service";

import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { friendReducer } from "./store/friend.reducer";
import { FriendEffects } from "./store/friend.effect";
import { AvatarModule } from "../avatar/avatar.module";

@NgModule({
  imports: [
    CommonModule,
    FriendRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature("friend", friendReducer),
    EffectsModule.forFeature([FriendEffects]),
    AvatarModule
  ],
  declarations: [
    DashboardComponent,
    FriendCardComponent,
    FriendListComponent,
    FriendTableComponent,
    FriendRecordComponent,
    FriendFormComponent,
    DebtsComponent
  ],
  providers: [FriendService, LoadFriendsGuard, LoadFriendGuard]
})
export class FriendModule {}
