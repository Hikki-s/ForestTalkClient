import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {}
