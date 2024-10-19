import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {}
