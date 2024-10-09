import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { NewsPostListComponent } from "./news-post-list.component";

describe("NewsPostListComponent", () => {
  let component: NewsPostListComponent;
  let fixture: ComponentFixture<NewsPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPostListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
