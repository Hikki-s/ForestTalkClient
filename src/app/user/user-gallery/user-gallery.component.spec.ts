import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { UserGalleryComponent } from "./user-gallery.component";

describe("UserGalleryComponent", () => {
  let component: UserGalleryComponent;
  let fixture: ComponentFixture<UserGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
