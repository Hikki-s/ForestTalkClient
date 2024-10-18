import { TestBed } from "@angular/core/testing";

import { NewsFeedService } from "./news-feed.service";

describe("PostService", () => {
  let service: NewsFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeedService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
