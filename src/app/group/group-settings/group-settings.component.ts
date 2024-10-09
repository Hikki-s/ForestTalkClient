import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-group-settings",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./group-settings.component.html",
  styleUrl: "./group-settings.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupSettingsComponent {}
