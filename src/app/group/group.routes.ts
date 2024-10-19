import type { Routes } from "@angular/router";
import { GroupComponent } from "./group.component";
import { GroupWallComponent } from "./group-wall/group-wall.component";
import { GroupSettingsComponent } from "./group-settings/group-settings.component";
import { GroupInfoComponent } from "./group-info/group-info.component";
import { GroupPostComponent } from "./group-post/group-post.component";

export const groupRoutes: Routes = [
  {
    path: "",
    component: GroupComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/groups",
      },
      {
        path: ":id",
        component: GroupInfoComponent,
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "wall",
          },
          {
            path: "wall",
            component: GroupWallComponent,
            children: [
              {
                path: ":postId",
                component: GroupPostComponent,
              },
            ],
          },
        ],
      },
      {
        path: ":id/settings",
        component: GroupSettingsComponent,
      },
    ],
  },
];
