import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-authed-layout",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./authed-layout.component.html",
  styleUrl: "./authed-layout.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthedLayoutComponent {}
