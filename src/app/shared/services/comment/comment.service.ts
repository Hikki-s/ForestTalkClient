import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URLS } from "@shared/constants/api-urls";
import type { Comment, NewComment } from "@shared/models/post.model";
import { catchError, of } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { filter, map } from "rxjs/operators";
import { LoggerService } from "@shared/services/logger/logger.service";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  private readonly http = inject(HttpClient);
  private readonly socket = webSocket("wss://your-websocket-url");
  private readonly logger = inject(LoggerService);

  getComments(postId: number) {
    return this.http
      .get<Comment[]>(API_URLS.GET_POST_COMMENTS(postId.toString()))
      .pipe(
        catchError((error) => {
          this.logger.error(
            `Error fetching comments for post ${postId}: ${error}`
          );
          return of([]);
        })
      );
  }

  addComment(postId: number, comment: NewComment) {
    return this.http
      .post<Comment>(API_URLS.ADD_COMMENT_TO_POST(postId.toString()), comment)
      .pipe(
        catchError((error) => {
          this.logger.error(`Error adding comment to post ${postId}: ${error}`);
          return of(null);
        })
      );
  }

  getCommentUpdates(postId: number) {
    return this.socket.asObservable().pipe(
      filter(
        (message) =>
          message.action === "newComment" && message.postId === postId
      ),
      map((message) => message.comment)
    );
  }

  updateComment(commentId: number, updatedContent: string) {
    return this.http
      .patch<Comment>(API_URLS.UPDATE_COMMENT(commentId.toString()), {
        content: updatedContent,
      })
      .pipe(
        catchError((error) => {
          this.logger.error(`Error updating comment ${commentId}: ${error}`);
          return of(null);
        })
      );
  }

  deleteComment(commentId: number) {
    return this.http
      .delete<void>(API_URLS.DELETE_COMMENT(commentId.toString()))
      .pipe(
        catchError((error) => {
          this.logger.error(`Error deleting comment ${commentId}: ${error}`);
          return of(null);
        })
      );
  }
}
