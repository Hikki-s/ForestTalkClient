import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { NewsPost } from "@shared/models/post.model";
import { NewsFeedService } from "../shared/services/feed/news-feed.service";

@Component({
  selector: "app-news-post-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news-post-list.component.html",
  styleUrl: "./news-post-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostListComponent implements OnInit {
  posts: NewsPost[] = [];
  private offset = 0;
  private readonly limit = 10;
  private readonly newsFeedService = inject(NewsFeedService);

  onScroll() {
    this.loadPosts();
  }

  ngOnInit() {
    this.loadPosts();
    this.newsFeedService
      .getPostsUpdates()
      .subscribe((updatedPost: NewsPost[]) => {
        this.newsFeedService.updatePosts(updatedPost);
      });
  }

  loadPosts() {
    this.newsFeedService
      .getFeed(this.offset, this.limit)
      .subscribe((newPosts) => {
        this.posts = [...this.posts, ...newPosts];
        this.offset += this.limit;
      });
  }
}
