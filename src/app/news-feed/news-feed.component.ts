import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-news-feed",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news-feed.component.html",
  styleUrl: "./news-feed.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFeedComponent {}
