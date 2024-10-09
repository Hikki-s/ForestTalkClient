import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {}
