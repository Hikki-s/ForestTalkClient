import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-reset-password",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./reset-password.component.html",
  styleUrl: "./reset-password.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {}
