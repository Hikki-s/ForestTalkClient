import type { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserGalleryComponent } from "./user-gallery/user-gallery.component";
import { UserPostComponent } from "./user-post/user-post.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";

const getRedirectPath = (): string => {
  const userId = localStorage.getItem("userId");
  return userId ? `${userId}` : "";
};

export const userRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: getRedirectPath,
  },
  {
    path: "settings",
    component: UserSettingsComponent,
  },
  {
    path: ":id",
    component: UserComponent,
    children: [
      {
        path: ":postId",
        component: UserPostComponent,
      },
    ],
  },
  {
    path: ":id/gallery",
    component: UserGalleryComponent,
  },
];
