import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-user-wall",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./user-wall.component.html",
  styleUrl: "./user-wall.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWallComponent {}
