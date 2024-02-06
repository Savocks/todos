import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {TodoPageComponent} from './todo-page.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoCreateComponent} from './components/todo-create/todo-create.component';

export const routes: Routes = [
  // localhost:4200/todo/
  { path: '', component: TodoPageComponent, children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'list'},
      { path: 'list', component: TodoListComponent },
      { path: 'create', component: TodoCreateComponent }
    ]},

];
