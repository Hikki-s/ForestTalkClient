import type { OnInit, OnDestroy } from "@angular/core";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ChangeDetectorRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, Subject, takeUntil, tap } from "rxjs";
import {
  TuiCardModule,
  TuiHeaderModule,
  TuiIconModule,
  TuiSurfaceModule,
  TuiTitleModule,
} from "@taiga-ui/experimental";
import {
  TuiAvatarModule,
  TuiCarouselModule,
  TuiPaginationModule,
} from "@taiga-ui/kit";
import { RouterLink } from "@angular/router";
import { OwnerLinkPipe } from "@shared/pipes/owner-link.pipe";
import type { NewsPost } from "@shared/models/post.model";
import { TimeAgoPipe } from "@shared/pipes/time-ago.pipe";
import {
  TuiButtonModule,
  TuiScrollbarModule,
  tuiScrollbarOptionsProvider,
} from "@taiga-ui/core";
import { Heart, LucideAngularModule, MessageSquare } from "lucide-angular";
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
    TuiPaginationModule,
    TuiIconModule,
    LucideAngularModule,
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
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = new Subject<void>();

  private readonly postsSubject = new BehaviorSubject<NewsPost[]>([]);
  posts$ = this.postsSubject.asObservable();

  protected readonly Heart = Heart;

  protected readonly MessageSquare = MessageSquare;
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
          this.postsSubject.next([
            ...this.postsSubject.getValue(),
            ...newPosts,
          ]);
        })
      )
      .subscribe();
  }

  likePost(post: NewsPost) {
    post.isLike = !post.isLike;
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
