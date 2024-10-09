import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-group-wall",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./group-wall.component.html",
  styleUrl: "./group-wall.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupWallComponent {}
