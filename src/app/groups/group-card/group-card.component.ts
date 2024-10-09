import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-group-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./group-card.component.html",
  styleUrl: "./group-card.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCardComponent {}
