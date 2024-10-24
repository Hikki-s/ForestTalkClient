import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TuiRootModule } from "@taiga-ui/core";
import { of } from "rxjs";
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from "@taiga-ui/i18n";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [TuiRootModule, RouterOutlet],
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
})
export class AppComponent {}
