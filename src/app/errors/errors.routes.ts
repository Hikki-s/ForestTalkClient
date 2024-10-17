import { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { InternalServerComponent } from "./internal-server/internal-server.component";
import { UnavailableComponent } from "./unavailable/unavailable.component";

export const errorRoutes: Routes = [
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
];
