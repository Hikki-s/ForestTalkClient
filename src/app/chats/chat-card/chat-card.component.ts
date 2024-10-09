import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-chat-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chat-card.component.html",
  styleUrl: "./chat-card.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatCardComponent {}
