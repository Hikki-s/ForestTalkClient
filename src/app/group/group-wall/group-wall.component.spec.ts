import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { GroupWallComponent } from "./group-wall.component";

describe("GroupWallComponent", () => {
  let component: GroupWallComponent;
  let fixture: ComponentFixture<GroupWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupWallComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
