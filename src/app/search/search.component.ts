import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {}
