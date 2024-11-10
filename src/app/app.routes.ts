import type { Routes } from "@angular/router";
import { NotAuthedLayoutComponent } from "@shared/components/layout/not-authed-layout/not-authed-layout.component";
import { AuthedLayoutComponent } from "@shared/components/layout/authed-layout/authed-layout.component";
import { authenticatedRouteGuard } from "./core/guards/authenticated/authenticated-route.guard";
import { notAuthenticatedRouteGuard } from "./core/guards/not-authenticated/not-authenticated-route.guard";

export const appRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AuthedLayoutComponent,
        loadChildren: () =>
          import("./core/routes/authenticated.routes").then(
            (m) => m.authenticatedRoutes
          ),
        canActivateChild: [authenticatedRouteGuard],
      },
      {
        path: "",
        component: NotAuthedLayoutComponent,
        loadChildren: () =>
          import("./core/routes/not-authenticated.routes").then(
            (m) => m.notAuthenticatedRoutes
          ),
        canActivateChild: [notAuthenticatedRouteGuard],
      },
      {
        path: "",
        loadChildren: () =>
          import("./errors/errors.routes").then((m) => m.errorRoutes),
      },
      {
        path: "**",
        redirectTo: "/404",
      },
    ],
  },
];
