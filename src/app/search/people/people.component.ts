import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-people",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./people.component.html",
  styleUrl: "./people.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent {}
