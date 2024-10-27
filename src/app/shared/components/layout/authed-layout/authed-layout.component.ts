import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@shared/components/footer/footer.component";
import { HeaderComponent } from "@shared/components/header/header.component";
import { SidebarComponent } from "@shared/components/sidebar/sidebar.component";

@Component({
  selector: "app-authed-layout",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: "./authed-layout.component.html",
  styleUrl: "./authed-layout.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthedLayoutComponent {}
