import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URLS } from "@shared/constants/api-urls";
import { catchError, of } from "rxjs";
import { LoggerService } from "@shared/services/logger/logger.service";

@Injectable({
  providedIn: "root",
})
export class LikeService {
  private readonly http = inject(HttpClient);
  private readonly logger = inject(LoggerService);

  addLike(postId: number) {
    return this.http
      .post<void>(API_URLS.ADD_LIKE_TO_POST(postId.toString()), {})
      .pipe(
        catchError((error) => {
          this.logger.error(`Error adding like to post ${postId}: ${error}`);
          return of(null);
        })
      );
  }

  removeLike(postId: number, likeId: number) {
    return this.http
      .delete<void>(
        API_URLS.DELETE_LIKE_FROM_POST(postId.toString(), likeId.toString())
      )
      .pipe(
        catchError((error) => {
          this.logger.error(
            `Error removing like ${likeId} from post ${postId}: ${error}`
          );
          return of(null);
        })
      );
  }
}
