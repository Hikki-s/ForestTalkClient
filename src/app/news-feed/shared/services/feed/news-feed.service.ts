import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, catchError, of } from "rxjs";
import type { Observable } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { filter, map } from "rxjs/operators";
import type { NewsPost, Comment, NewComment } from "@shared/models/post.model";
import { API_URLS } from "@shared/constants/api-urls";
import { LoggerService } from "@shared/services/logger/logger.service";

@Injectable({
  providedIn: "root",
})
export class NewsFeedService {
  private readonly http = inject(HttpClient);
  private readonly socket = webSocket("wss://your-websocket-url");
  private readonly logger = inject(LoggerService);
  private readonly postsSubject = new BehaviorSubject<NewsPost[]>([]);
  posts$ = this.postsSubject.asObservable();

  getFeed(offset: number, limit: number): Observable<NewsPost[]> {
    const params = { offset, limit };
    return this.http.get<NewsPost[]>(API_URLS.GET_FEED, { params }).pipe(
      map((posts) => {
        const currentPosts = this.postsSubject.getValue();
        this.postsSubject.next([...currentPosts, ...posts]);
        return posts;
      }),
      catchError((error) => {
        this.logger.error(`Error fetching posts: ${error}`);
        return of([]);
      })
    );
  }

  getPostsUpdates(): Observable<NewsPost[]> {
    return this.socket.asObservable().pipe(
      filter((message) => message.action === "update"),
      map((message) => message.post)
    );
  }

  updatePosts(updatedPosts: NewsPost[]) {
    const currentPosts = this.postsSubject.getValue();
    const updatedPostsMap = new Map(
      updatedPosts.map((post) => [post.id, post])
    );

    const newPosts = currentPosts
      .map((post) =>
        updatedPostsMap.has(post.id) ? updatedPostsMap.get(post.id) : post
      )
      .filter((post): post is NewsPost => post !== undefined);

    this.postsSubject.next(newPosts);
  }
}
