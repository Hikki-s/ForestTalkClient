import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-wall",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-wall.component.html",
  styleUrl: "./user-wall.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWallComponent {}
