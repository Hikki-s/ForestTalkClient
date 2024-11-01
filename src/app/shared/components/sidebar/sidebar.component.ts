import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiCardModule, TuiSurfaceModule } from "@taiga-ui/experimental";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { TuiLinkModule } from "@taiga-ui/core";
import { SIDEBAR_SECTIONS } from "@shared/constants/sidebarConstants";

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
  protected readonly fields = SIDEBAR_SECTIONS;
}
