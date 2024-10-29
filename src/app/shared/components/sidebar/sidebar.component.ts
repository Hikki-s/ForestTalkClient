import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiCardModule, TuiSurfaceModule } from "@taiga-ui/experimental";
import {
  BookUser,
  LucideAngularModule,
  MessageSquare,
  Newspaper,
  SquareUserRound,
  UsersRound,
} from "lucide-angular";
import { RouterLink } from "@angular/router";
import { TuiLinkModule } from "@taiga-ui/core";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    CommonModule,
    TuiCardModule,
    TuiSurfaceModule,
    LucideAngularModule,
    RouterLink,
    TuiLinkModule,
  ],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  protected readonly Newspaper = Newspaper;
  protected readonly SquareUserRound = SquareUserRound;
  protected readonly MessageSquare = MessageSquare;
  protected readonly UsersRound = UsersRound;
  protected readonly BookUser = BookUser;
}
