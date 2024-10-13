import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RouterOutlet,
  ],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
