import type { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { InternalServerComponent } from "./internal-server/internal-server.component";
import { UnavailableComponent } from "./unavailable/unavailable.component";
import { ErrorsComponent } from "./errors.component";

export const errorRoutes: Routes = [
  {
    path: "",
    component: ErrorsComponent,
    children: [
      {
        path: "404",
        component: NotFoundComponent,
      },
      {
        path: "500",
        component: InternalServerComponent,
      },
      {
        path: "503",
        component: UnavailableComponent,
      },
    ],
  },
];
