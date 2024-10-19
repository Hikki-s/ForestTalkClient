import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-user-info",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./user-info.component.html",
  styleUrl: "./user-info.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {}
