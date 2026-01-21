import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBDdHCZR6hHCVsQQTmGdr1_hgh0J6Yzehc",
      authDomain: "zulus-62570.firebaseapp.com",
      projectId: "zulus-62570",
      storageBucket: "zulus-62570.firebasestorage.app",
      messagingSenderId: "191259255750",
      appId: "1:191259255750:web:d0c7c97026bd644d82c8c7",
      measurementId: "G-JZQ3KR9S93"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
