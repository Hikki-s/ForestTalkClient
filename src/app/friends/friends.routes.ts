import { Routes } from "@angular/router";
import { FriendsComponent } from "./friends.component";
import { FriendsListComponent } from "./friends-list/friends-list.component";

export const friendsRoutes: Routes = [
  {
    path: "",
    component: FriendsComponent,
    children: [
      {
        path: "list",
        component: FriendsListComponent,
      },
    ],
  },
];
