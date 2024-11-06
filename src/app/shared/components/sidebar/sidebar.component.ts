import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiCardModule, TuiSurfaceModule } from "@taiga-ui/experimental";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { TuiLinkModule } from "@taiga-ui/core";
import {
  SIDEBAR_PC_SECTIONS,
  SIDEBAR_MOBILE_SECTIONS,
} from "@shared/constants/sidebarConstants";
import { TuiTabBarModule } from "@taiga-ui/addon-mobile";

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
    TuiTabBarModule,
  ],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  protected readonly pcFields = SIDEBAR_PC_SECTIONS;
  protected readonly mobileFields = SIDEBAR_MOBILE_SECTIONS;
}
