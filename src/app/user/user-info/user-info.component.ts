import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-info",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-info.component.html",
  styleUrl: "./user-info.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {}
