import type { OnInit } from "@angular/core";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { NewComment, NewsPost } from "@shared/models/post.model";
import { ActivatedRoute } from "@angular/router";
import { StorageService } from "@shared/services/storage/storage.service";
import { PostService } from "../shared/services/post/post.service";

@Component({
  selector: "app-news-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news-post.component.html",
  styleUrl: "./news-post.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostComponent implements OnInit {
  post: NewsPost;
  postId: number;
  private readonly postService = inject(PostService);
  private readonly route = inject(ActivatedRoute);
  private readonly storage = inject(StorageService);

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get("postId"));

    this.postService.getPost(this.postId).subscribe((data) => {
      this.post = data;

      if (!this.post.comments) {
        this.post.comments = [];
      }
    });

    this.postService.getCommentUpdates(this.postId).subscribe((newComment) => {
      if (!this.post.comments) {
        this.post.comments = [];
      }
      this.post.comments.push(newComment);
    });
  }

  likePost() {
    this.postService.likePost(this.postId);
  }

  addComment(content: string) {
    const user = this.storage.getItem("user", true);
    const newComment: NewComment = {
      postId: this.postId,
      userId: user.id,
      content,
    };
    this.postService.commentPost(this.postId, newComment);
  }
}
