import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-internal-server",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./internal-server.component.html",
  styleUrl: "./internal-server.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalServerComponent {}
