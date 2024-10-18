import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from "rxjs";
import { TuiAppearance, TuiLoader, TuiNotification } from "@taiga-ui/core";
import { TuiCardLarge } from "@taiga-ui/layout";
import { TuiChip } from "@taiga-ui/kit";
import { NewsFeedService } from "../shared/services/feed/news-feed.service";

@Component({
  selector: "app-news-post-list",
  standalone: true,
  imports: [
    CommonModule,
    TuiNotification,
    TuiCardLarge,
    TuiLoader,
    TuiChip,
    TuiAppearance,
  ],
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
