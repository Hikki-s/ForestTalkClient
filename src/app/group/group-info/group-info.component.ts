import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-group-info",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./group-info.component.html",
  styleUrl: "./group-info.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupInfoComponent {}
