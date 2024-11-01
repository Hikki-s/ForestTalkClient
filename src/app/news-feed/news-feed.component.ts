import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { Params } from "@angular/router";
import { NEWS_FEED_SIDEBAR_SECTIONS } from "@shared/constants/newsFeedConstants";
import { TuiCardModule, TuiSurfaceModule } from "@taiga-ui/experimental";
import { TuiLinkModule } from "@taiga-ui/core";
import { Router, RouterLink } from "@angular/router";
import { NewsPostListComponent } from "./news-post-list/news-post-list.component";

@Component({
  selector: "app-news-feed",
  standalone: true,
  imports: [
    CommonModule,
    NewsPostListComponent,
    TuiCardModule,
    TuiSurfaceModule,
    TuiLinkModule,
    RouterLink,
    RouterLink,
  ],
  templateUrl: "./news-feed.component.html",
  styleUrl: "./news-feed.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFeedComponent implements OnInit {
  protected readonly sections = NEWS_FEED_SIDEBAR_SECTIONS;

  protected readonly router = inject(Router);

  currentUrl?: string;

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  getFullUrl(url: string, queryParams: Params = {}): string {
    const queryString = new URLSearchParams(queryParams).toString();
    return queryString ? `${url}?${queryString}` : url;
  }
}
