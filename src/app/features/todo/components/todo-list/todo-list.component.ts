import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Observable} from 'rxjs';
import {Todo} from '../../models/todo.model';
import {TodoDataService} from '../../services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  private todoData: TodoDataService = inject(TodoDataService);
  public todos$: Observable<Todo[]> = this.todoData.todos$;
}
