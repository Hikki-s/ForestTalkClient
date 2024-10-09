import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { ChatCardComponent } from "./chat-card.component";

describe("ChatCardComponent", () => {
  let component: ChatCardComponent;
  let fixture: ComponentFixture<ChatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
