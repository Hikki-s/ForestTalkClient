import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-friends",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./friends.component.html",
  styleUrl: "./friends.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsComponent {}
