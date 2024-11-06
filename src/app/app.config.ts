import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import type { ApplicationConfig } from "@angular/core";
import { importProvidersFrom } from "@angular/core";
import { provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { TuiRootModule } from "@taiga-ui/core";
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from "@taiga-ui/i18n";
import { of } from "rxjs";
import { appRoutes } from "./app.routes";
import { authInterceptor } from "./auth/shared/interceptors/auth/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    NG_EVENT_PLUGINS,
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(TuiRootModule),
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
  ],
};
