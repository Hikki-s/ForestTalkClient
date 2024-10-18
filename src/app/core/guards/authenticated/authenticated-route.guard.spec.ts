import { TestBed } from "@angular/core/testing";
import type { CanActivateFn } from "@angular/router";

import { authenticatedRouteGuard } from "./authenticated-route.guard";

describe("authRouteGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      authenticatedRouteGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
