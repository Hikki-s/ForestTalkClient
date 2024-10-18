import type { Routes } from "@angular/router";
import { SearchComponent } from "./search.component";
import { PeopleComponent } from "./people/people.component";
import { CommunitiesComponent } from "./communities/communities.component";

export const searchRoutes: Routes = [
  {
    path: "",
    component: SearchComponent,
    children: [
      {
        path: "people",
        component: PeopleComponent,
      },
      {
        path: "communities",
        component: CommunitiesComponent,
      },
    ],
  },
];
