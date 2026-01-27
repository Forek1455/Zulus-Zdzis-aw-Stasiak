import { Routes } from '@angular/router';
import { StronaGlowna } from './pages/strona-glowna/strona-glowna';
import { InformacjePrawne } from './pages/informacje-prawne/informacje-prawne';
import { Strona404 } from './strona-404/strona-404';
import { PostFormComponent } from './models/post-form';
import { LoginComponent } from './pages/login/login';
import { DotacjeUnijne } from './pages/dotacje-unijne/dotacje-unijne';
export const routes: Routes = [
  { path: '', component: StronaGlowna, },
  { path: 'informacje-prawne', component: InformacjePrawne },
  { path: 'dodaj-wpis', component: PostFormComponent },
  { path: 'login', component: LoginComponent }, 
  {path: "dotacje-unijne",component: DotacjeUnijne},
  { path: '**', component: Strona404 }
];