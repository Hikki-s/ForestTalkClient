import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TuiRootModule } from "@taiga-ui/core";


@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [TuiRootModule, RouterOutlet],
})
export class AppComponent {}
