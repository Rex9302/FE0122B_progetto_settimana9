import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoService from '../todo.service'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  task!:Todo[];

  newTask: string | undefined;
  constructor() {
    TodoService.get().then((todos) => (this.task = todos.filter(todo => todo.completed)));
  }

}
