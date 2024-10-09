import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-group",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./group.component.html",
  styleUrl: "./group.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent {}
