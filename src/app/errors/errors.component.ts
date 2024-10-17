import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-errors",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./errors.component.html",
  styleUrl: "./errors.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsComponent {}
