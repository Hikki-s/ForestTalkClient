import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-chats",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./chats.component.html",
  styleUrl: "./chats.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsComponent {}
