import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-chats",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chats.component.html",
  styleUrl: "./chats.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsComponent {}
