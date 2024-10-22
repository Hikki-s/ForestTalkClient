import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import { provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { appRoutes } from "./app.routes";
import {TuiRootModule} from "@taiga-ui/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    NG_EVENT_PLUGINS,
    provideHttpClient(),
    importProvidersFrom(TuiRootModule),
  ],
};
