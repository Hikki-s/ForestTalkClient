import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-news-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./news-post.component.html",
  styleUrl: "./news-post.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostComponent {}
