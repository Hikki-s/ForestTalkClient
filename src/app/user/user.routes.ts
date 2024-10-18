import type { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserWallComponent } from "./user-wall/user-wall.component";
import { UserGalleryComponent } from "./user-gallery/user-gallery.component";
import { UserPostComponent } from "./user-post/user-post.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";

export const userRoutes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: ":id",
      },
      {
        path: ":id",
        component: UserInfoComponent,
        children: [
          {
            path: "wall",
            component: UserWallComponent,
            children: [
              {
                path: "post/:id",
                component: UserPostComponent,
              },
            ],
          },
          {
            path: "gallery",
            component: UserGalleryComponent,
          },
        ],
      },
      {
        path: "settings",
        component: UserSettingsComponent,
      },
    ],
  },
];
