import { NewsFeedComponent } from "./news-feed.component";
import { Routes } from "@angular/router";
import { NewsPostListComponent } from "./news-post-list/news-post-list.component";
import { NewsPostComponent } from "./news-post/news-post.component";

export const newsFeedRoutes: Routes = [
  {
    path: "",
    component: NewsFeedComponent,
    children: [
      {
        path: "",
        component: NewsPostListComponent,
        children: [
          {
            path: ":id",
            component: NewsPostComponent,
          },
        ],
      },
    ],
  },
];
