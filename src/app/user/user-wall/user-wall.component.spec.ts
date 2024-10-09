import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { UserWallComponent } from "./user-wall.component";

describe("UserWallComponent", () => {
  let component: UserWallComponent;
  let fixture: ComponentFixture<UserWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWallComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
