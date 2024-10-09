import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-groups-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./groups-list.component.html",
  styleUrl: "./groups-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsListComponent {}
