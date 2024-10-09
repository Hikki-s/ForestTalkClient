import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-chats-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chats-list.component.html",
  styleUrl: "./chats-list.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsListComponent {}
