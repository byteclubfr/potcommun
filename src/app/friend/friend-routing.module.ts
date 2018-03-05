import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FriendListComponent } from "./components/friend-list/friend-list.component";
import { FriendRecordComponent } from "./components/friend-record/friend-record.component";
import { LoadFriendsGuard } from "./guards/load-friends.guard";
import { LoadFriendGuard } from "./guards/load-friend.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [LoadFriendsGuard]
  },
  {
    path: "list",
    component: FriendListComponent,
    canActivate: [LoadFriendsGuard]
  },
  {
    path: "add",
    component: FriendRecordComponent
  },
  {
    path: ":id",
    component: FriendRecordComponent,
    canActivate: [LoadFriendGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule {}
