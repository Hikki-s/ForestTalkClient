import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { notAuthenticatedRouteGuard } from "./not-authenticated-route.guard";

describe("notAuthenticatedRouteGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      notAuthenticatedRouteGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
