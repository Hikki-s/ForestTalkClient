import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Subject } from "rxjs";
import { NewsFeedService } from "../shared/services/feed/news-feed.service";

@Component({
  selector: "app-news-post-list",
  standalone: true,
  imports: [],
  templateUrl: "./news-post-list.component.html",
  styleUrl: "./news-post-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostListComponent implements OnInit {
  private readonly offset = 0;
  private readonly limit = 1;
  private readonly newsFeedService = inject(NewsFeedService);
  private readonly destroy$ = new Subject<void>();

  posts$ = this.newsFeedService.posts$;

  onScroll() {
    this.loadPosts();
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.newsFeedService.getFeed(this.offset, this.limit);
  }
}
