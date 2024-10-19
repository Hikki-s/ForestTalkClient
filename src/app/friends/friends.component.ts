import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-friends",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./friends.component.html",
  styleUrl: "./friends.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsComponent {}
