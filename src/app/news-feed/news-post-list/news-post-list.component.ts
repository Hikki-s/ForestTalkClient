import type { OnInit, OnDestroy } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, Subject, takeUntil, tap } from "rxjs";
import {
  TuiCardModule,
  TuiHeaderModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from "@taiga-ui/experimental";
import { TuiAvatarModule, TuiCarouselModule } from "@taiga-ui/kit";
import { RouterLink } from "@angular/router";
import { OwnerLinkPipe } from "@shared/pipes/owner-link.pipe";
import type { NewsPost } from "@shared/models/post.model";
import { TimeAgoPipe } from "@shared/pipes/time-ago.pipe";
import {
  TuiButtonModule,
  TuiScrollbarModule,
  tuiScrollbarOptionsProvider,
} from "@taiga-ui/core";
import { NewsFeedService } from "../shared/services/feed/news-feed.service";

@Component({
  selector: "app-news-post-list",
  standalone: true,
  imports: [
    CommonModule,
    TuiCardModule,
    TuiSurfaceModule,
    TuiHeaderModule,
    TuiAvatarModule,
    TuiAvatarModule,
    RouterLink,
    OwnerLinkPipe,
    TuiTitleModule,
    TimeAgoPipe,
    TuiScrollbarModule,
    TuiCarouselModule,
    TuiButtonModule,
  ],
  templateUrl: "./news-post-list.component.html",
  styleUrl: "./news-post-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiScrollbarOptionsProvider({
      mode: "hover",
    }),
  ],
})
export class NewsPostListComponent implements OnInit, OnDestroy {
  private readonly offset = 0;
  private readonly limit = 1;
  private readonly newsFeedService = inject(NewsFeedService);
  private readonly destroy$ = new Subject<void>();

  private readonly postsSubject = new BehaviorSubject<NewsPost[]>([]);
  posts$ = this.postsSubject.asObservable();

  onScroll() {
    this.loadPosts();
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.newsFeedService
      .getFeed(this.offset, this.limit)
      .pipe(
        takeUntil(this.destroy$),
        tap((newPosts) => {
          const currentPosts = this.postsSubject.getValue();
          this.postsSubject.next([...currentPosts, ...newPosts]);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
