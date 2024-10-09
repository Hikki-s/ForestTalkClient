import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-friend-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./friend-card.component.html",
  styleUrl: "./friend-card.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendCardComponent {}
