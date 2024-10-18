import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { NewsPost } from "@shared/models/post.model";
import { ActivatedRoute } from "@angular/router";
import { CommentService } from "@shared/services/comment/comment.service";
import { LikeService } from "@shared/services/like/like.service";
import { NewsFeedService } from "../shared/services/feed/news-feed.service";

@Component({
  selector: "app-news-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news-post.component.html",
  styleUrl: "./news-post.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostComponent implements OnInit {
  post: NewsPost | undefined;

  private readonly newsFeedService = inject(NewsFeedService);
  private readonly commentService = inject(CommentService);
  private readonly likeService = inject(LikeService);

  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const postId = Number(this.route.snapshot.paramMap.get("postId"));
  }
}
