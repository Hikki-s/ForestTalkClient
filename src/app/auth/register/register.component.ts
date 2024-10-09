import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
