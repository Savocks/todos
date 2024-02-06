import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Todo} from '../models/todo.model';
import {TodoService} from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private todoService: TodoService = inject(TodoService);
  private todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  public todos$: Observable<Todo[]> = this.todos.asObservable();
  constructor() { }

  public initializeTodos() {
    this.todoService.getAllTodos().subscribe((todos) => this.todos.next(todos));
  }
}
