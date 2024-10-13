import { Component } from "@angular/core";
import { LayoutComponent } from "@shared/components/layout/layout.component";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [LayoutComponent, RouterOutlet],
})
export class AppComponent {}
