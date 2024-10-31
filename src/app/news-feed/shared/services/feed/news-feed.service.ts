import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, catchError, of } from "rxjs";
import { map } from "rxjs/operators";
import type { NewsPost } from "@shared/models/post.model";
import { API_URLS } from "@shared/constants/api-urls";
import { Logger } from "@shared/lib/logger/logger";

@Injectable({
  providedIn: "root",
})
export class NewsFeedService {
  private readonly http = inject(HttpClient);
  private readonly postsSubject = new BehaviorSubject<NewsPost[]>([]);
  posts$ = this.postsSubject.asObservable();

  getFeed(offset: number, limit: number): void {
    const params = { offset, limit };
    this.http
      .get<NewsPost[]>(API_URLS.GET_FEED, { params })
      .pipe(
        map((posts) => {
          const currentPosts = this.postsSubject.getValue();
          this.postsSubject.next([...currentPosts, ...posts]);
          return posts;
        }),
        catchError((error) => {
          Logger.api.error(`Error fetching posts: ${error}`);
          return of([]);
        })
      )
      .subscribe();
  }
}
