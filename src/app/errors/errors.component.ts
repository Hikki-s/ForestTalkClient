import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-errors",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./errors.component.html",
  styleUrl: "./errors.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsComponent {}
