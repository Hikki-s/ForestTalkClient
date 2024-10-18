import { Routes } from "@angular/router";
import { ChatsComponent } from "./chats.component";
import { ChatsListComponent } from "./chats-list/chats-list.component";

export const chatRoutes: Routes = [
  {
    path: "",
    component: ChatsComponent,
    children: [
      {
        path: "",
        component: ChatsListComponent,
        children: [
          {
            path: ":id",
            component: ChatsComponent,
          },
        ],
      },
    ],
  },
];
