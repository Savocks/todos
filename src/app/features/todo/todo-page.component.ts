import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {TodoDataService} from './services/todo-data.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  private todoData: TodoDataService = inject(TodoDataService);
  constructor() {
    this.todoData.initializeTodos();
  }
}
