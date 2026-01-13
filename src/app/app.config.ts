import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { studentsReducer } from './state/students.reducer';
import { provideEffects } from '@ngrx/effects';
import { studentsRecordsEffects } from './state/students-records-effects';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideAnimations(),
    provideHttpClient(),
    provideEffects(studentsRecordsEffects),
    provideState({
      name: 'studentsRecords',
      reducer: studentsReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ],
};
