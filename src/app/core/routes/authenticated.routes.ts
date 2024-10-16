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
  {
    path: "friends",
    loadChildren: () =>
      import("../../friends/friends.routes").then((m) => m.friendsRoutes),
  },
  {
    path: "groups",
    loadChildren: () =>
      import("../../groups/groups.routes").then((m) => m.groupsRoutes),
  },
  {
    path: "group",
    loadChildren: () =>
      import("../../group/group.routes").then((m) => m.groupRoutes),
  },
  {
    path: "chats",
    loadChildren: () =>
      import("../../chats/chats.routes").then((m) => m.chatRoutes),
  },
  {
    path: "search",
    loadChildren: () =>
      import("../../search/search.routes").then((m) => m.searchRoutes),
  }
];
