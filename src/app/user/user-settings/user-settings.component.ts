import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-settings",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-settings.component.html",
  styleUrl: "./user-settings.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettingsComponent {}
