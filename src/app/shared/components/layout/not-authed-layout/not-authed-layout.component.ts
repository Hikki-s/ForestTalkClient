import { Component } from "@angular/core";
import { HeaderComponent } from "@shared/components/header/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@shared/components/footer/footer.component";
import { SidebarComponent } from "@shared/components/sidebar/sidebar.component";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, SidebarComponent],
  templateUrl: "./not-authed-layout.component.html",
  styleUrl: "./not-authed-layout.component.less",
})
export class NotAuthedLayoutComponent {}
