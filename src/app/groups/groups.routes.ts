import { Routes } from "@angular/router";
import { GroupsComponent } from "./groups.component";
import { GroupsListComponent } from "./groups-list/groups-list.component";

export const groupsRoutes: Routes = [
  {
    path: "",
    component: GroupsComponent,
    children: [
      {
        path: "",
        component: GroupsListComponent,
      },
    ],
  },
];
