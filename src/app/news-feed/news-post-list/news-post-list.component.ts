import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { NewsPost } from "@shared/models/post.model";
import { PostService } from "../shared/services/post/post.service";

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
  private readonly postService = inject(PostService);

  onScroll() {
    this.loadPosts();
  }

  ngOnInit() {
    this.loadPosts();
    this.postService.getPostUpdates().subscribe((updatedPost: NewsPost[]) => {
      this.postService.updatePosts(updatedPost);
    });
  }

  loadPosts() {
    this.postService.getPosts(this.offset, this.limit).subscribe((newPosts) => {
      this.posts = [...this.posts, ...newPosts];
      this.offset += this.limit;
    });
  }
}
