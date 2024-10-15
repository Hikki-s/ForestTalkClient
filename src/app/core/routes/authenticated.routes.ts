import { Routes } from "@angular/router";

export const authenticatedRoutes: Routes = [
  {
    path: "feed",
    loadChildren: () =>
      import("../../news-feed/news-feed.routes").then((m) => m.newsFeedRoutes),
  },
  {
    path: "user",
    loadChildren: () =>
      import("../../user/user.routes").then((m) => m.userRoutes),
  },
];
