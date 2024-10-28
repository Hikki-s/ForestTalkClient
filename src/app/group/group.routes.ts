import type { Routes } from "@angular/router";
import { GroupComponent } from "./group.component";
import { GroupSettingsComponent } from "./group-settings/group-settings.component";
import { GroupPostComponent } from "./group-post/group-post.component";

export const groupRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/groups",
  },
  {
    path: ":id",
    component: GroupComponent,
    children: [
      {
        path: ":postId",
        component: GroupPostComponent,
      },
    ],
  },
  {
    path: ":id/settings",
    component: GroupSettingsComponent,
  },
];
