import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, of } from "rxjs";
import type { Observable } from "rxjs";
import type { NewsPost } from "@shared/models/post.model";
import { API_URLS } from "@shared/constants/api-urls";
import { LoggerService } from "@shared/services/logger/logger.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);

  // Получить пост по ID
  getPost(postId: number): Observable<NewsPost> {
    return this.http
      .get<NewsPost>(API_URLS.GET_POST_BY_ID(postId.toString()))
      .pipe(
        catchError((error) => {
          this.logger.error(`Error fetching post ${postId}: ${error}`);
          return of(null); // или другой подходящий тип
        })
      );
  }

  // Создать новый пост
  createPost(newPost: NewsPost): Observable<NewsPost> {
    return this.http.post<NewsPost>(API_URLS.CREATE_POST, newPost).pipe(
      catchError((error) => {
        this.logger.error(`Error creating post: ${error}`);
        return of(null);
      })
    );
  }

  // Обновить пост
  updatePost(
    postId: number,
    updatedPost: Partial<NewsPost>
  ): Observable<NewsPost> {
    return this.http
      .patch<NewsPost>(API_URLS.UPDATE_POST(postId.toString()), updatedPost)
      .pipe(
        catchError((error) => {
          this.logger.error(`Error updating post ${postId}: ${error}`);
          return of(null);
        })
      );
  }

  // Удалить пост
  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(API_URLS.DELETE_POST(postId.toString())).pipe(
      catchError((error) => {
        this.logger.error(`Error deleting post ${postId}: ${error}`);
        return of(undefined);
      })
    );
  }

  // Добавить медиафайл к посту
  addMediaToPost(postId: number, media: FormData): Observable<void> {
    return this.http
      .post<void>(API_URLS.ADD_MEDIA_TO_POST(postId.toString()), media)
      .pipe(
        catchError((error) => {
          this.logger.error(`Error adding media to post ${postId}: ${error}`);
          return of(undefined);
        })
      );
  }

  // Удалить медиафайл с поста
  deleteMediaFromPost(postId: number, mediaId: number): Observable<void> {
    return this.http
      .delete<void>(
        API_URLS.DELETE_MEDIA_FROM_POST(postId.toString(), mediaId.toString())
      )
      .pipe(
        catchError((error) => {
          this.logger.error(
            `Error deleting media ${mediaId} from post ${postId}: ${error}`
          );
          return of(undefined);
        })
      );
  }
}
