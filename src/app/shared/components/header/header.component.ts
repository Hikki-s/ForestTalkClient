import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiIconModule } from "@taiga-ui/experimental";
import { LucideAngularModule, ChevronDown, User } from "lucide-angular";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, TuiIconModule, LucideAngularModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly avatarUrl: string | null = localStorage.getItem("userAvatarUrl");
  protected readonly ChevronDown = ChevronDown;
  protected readonly User = User;
}
