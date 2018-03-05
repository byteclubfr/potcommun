import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "./admin.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/friends"
  },
  {
    path: "friends",
    loadChildren: "app/friend/friend.module#FriendModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
