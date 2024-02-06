import {Injectable} from '@angular/core';
import {Todo, TodoStatusEnum} from '../models/todo.model';
import {Observable, of} from 'rxjs';

export const todos: Todo[] = [
  {
    title: 'Primo Todo',
    description: 'Descrizione',
    status: TodoStatusEnum.TODO
  },
  {
    title: 'Secondo Todo',
    description: 'Descrizione',
    status: TodoStatusEnum.DOING
  },
  {
    title: 'Terzo Todo',
    description: 'Descrizione',
    status: TodoStatusEnum.DOING
  },
  {
    title: 'Quarto Todo',
    description: 'Descrizione',
    status: TodoStatusEnum.DONE
  },
  {
    title: 'Quinto Todo',
    description: 'Descrizione',
    status: TodoStatusEnum.TODO
  },
]

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  public getAllTodos(): Observable<Todo[]> {
    return of(todos);
  }
}
