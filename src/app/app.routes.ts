import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo', loadChildren: () => import('./features/todo/todo.routes').then(m => m.routes) },
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];
