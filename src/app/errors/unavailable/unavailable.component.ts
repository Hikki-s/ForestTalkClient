import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-unavailable",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./unavailable.component.html",
  styleUrl: "./unavailable.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnavailableComponent {}
