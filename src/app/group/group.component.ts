import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-group",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./group.component.html",
  styleUrl: "./group.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent {}
