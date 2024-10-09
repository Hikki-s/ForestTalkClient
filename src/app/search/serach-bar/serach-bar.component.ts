import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-serach-bar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./serach-bar.component.html",
  styleUrl: "./serach-bar.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerachBarComponent {}
