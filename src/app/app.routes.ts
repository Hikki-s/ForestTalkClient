import type { Routes } from "@angular/router";
import { LayoutComponent } from "@shared/components/layout/layout/layout.component";
import { AuthedLayoutComponent } from "@shared/components/authed-layout/authed-layout.component";
import { authenticatedRouteGuard } from "./core/guards/authenticated/authenticated-route.guard";
// import { notAuthenticatedRouteGuard } from "./core/guards/not-authenticated/not-authenticated-route.guard";

export const appRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
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
        loadChildren: () =>
          import("./core/routes/not-authenticated.routes").then(
            (m) => m.notAuthenticatedRoutes
          ),
        // canActivateChild: [notAuthenticatedRouteGuard],
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
