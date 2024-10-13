import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: "app-news-post-list",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./news-post-list.component.html",
  styleUrl: "./news-post-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostListComponent {}
