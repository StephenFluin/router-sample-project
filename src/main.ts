import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RouterSampleProjectAppComponent, environment } from './app/';

import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(RouterSampleProjectAppComponent, provideRouter(routes));

