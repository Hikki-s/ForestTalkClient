import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-communities",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./communities.component.html",
  styleUrl: "./communities.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitiesComponent {}
