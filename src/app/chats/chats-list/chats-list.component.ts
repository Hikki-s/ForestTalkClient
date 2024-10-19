import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-chats-list",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./chats-list.component.html",
  styleUrl: "./chats-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsListComponent {}
