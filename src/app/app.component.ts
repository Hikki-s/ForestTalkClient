import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TuiRootModule } from "@taiga-ui/core";
import { of } from "rxjs";
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from "@taiga-ui/i18n";
import { TuiIconModule } from "@taiga-ui/experimental";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrl: "app.component.less",
  imports: [TuiRootModule, RouterOutlet, TuiIconModule],
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],

})
export class AppComponent {}
