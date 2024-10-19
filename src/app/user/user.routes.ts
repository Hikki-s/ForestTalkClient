import type { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserWallComponent } from "./user-wall/user-wall.component";
import { UserGalleryComponent } from "./user-gallery/user-gallery.component";
import { UserPostComponent } from "./user-post/user-post.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";

const getRedirectPath = (): string => {
  const userId = localStorage.getItem("userId");
  return userId ? `${userId}` : "";
};

export const userRoutes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: getRedirectPath,
      },
      {
        path: ":id",
        component: UserInfoComponent,
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "wall",
          },
          {
            path: "wall",
            component: UserWallComponent,
            children: [
              {
                path: ":postId",
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
        path: ":id/settings",
        component: UserSettingsComponent,
      },
    ],
  },
];
