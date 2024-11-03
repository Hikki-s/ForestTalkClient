import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, of } from "rxjs";
import { Logger } from "@shared/lib/logger/logger";
import { API_URLS } from "@shared/constants/api-urls";
import type { NewsPost } from "@shared/models/post.model";

@Injectable({
  providedIn: "root",
})
export class NewsFeedService {
  private readonly http = inject(HttpClient);

  getFeed(offset: number, limit: number) {
    const params = { offset, limit };
    return (
      this.http
        // .get<NewsPost[]>(API_URLS.GET_FEED)
        .get<NewsPost[]>(API_URLS.GET_FEED, { params })
        .pipe(
          catchError((error) => {
            Logger.api.error(`Error fetching posts: ${error}`);
            return of([]);
          })
        )
    );
  }
}
