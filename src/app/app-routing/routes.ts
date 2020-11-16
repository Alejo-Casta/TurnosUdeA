import { Routes } from '@angular/router';

import { SedesComponent } from '../sedes/sedes.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sedes', component: SedesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];