import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TuiAlertModule, TuiRootModule } from "@taiga-ui/core";
import { TuiIconModule } from "@taiga-ui/experimental";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrl: "app.component.less",
  imports: [TuiRootModule, RouterOutlet, TuiIconModule, TuiAlertModule],
})
export class AppComponent {}
