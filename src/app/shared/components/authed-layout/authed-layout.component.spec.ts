import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { AuthedLayoutComponent } from "./authed-layout.component";

describe("AuthedLayoutComponent", () => {
  let component: AuthedLayoutComponent;
  let fixture: ComponentFixture<AuthedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthedLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
