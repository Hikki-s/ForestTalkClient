import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-groups",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./groups.component.html",
  styleUrl: "./groups.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent {}
