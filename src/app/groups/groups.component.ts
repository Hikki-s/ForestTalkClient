import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-groups",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./groups.component.html",
  styleUrl: "./groups.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent {}
