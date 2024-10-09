import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { NewsPostComponent } from "./news-post.component";

describe("NewsPostComponent", () => {
  let component: NewsPostComponent;
  let fixture: ComponentFixture<NewsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
