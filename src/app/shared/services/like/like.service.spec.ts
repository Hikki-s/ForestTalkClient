import { TestBed } from "@angular/core/testing";

import { LikeService } from "./like.service";

describe("LikeServiceService", () => {
  let service: LikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
