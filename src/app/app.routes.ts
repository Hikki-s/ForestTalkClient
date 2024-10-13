import type { Routes } from "@angular/router";
import { LayoutComponent } from "@shared/components/layout/layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const appRoutes: Routes = [
  {
    path: "404",
    component: NotFoundComponent,
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "feed",
        loadChildren: () =>
          import("./news-feed/news-feed.routes").then((m) => m.newsFeedRoutes),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/404",
  },
];
