import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-friends-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./friends-list.component.html",
  styleUrl: "./friends-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsListComponent {}
