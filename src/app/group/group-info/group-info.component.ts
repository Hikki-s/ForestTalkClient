import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-group-info",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./group-info.component.html",
  styleUrl: "./group-info.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupInfoComponent {}
