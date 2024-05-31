import { Component, Input, input } from '@angular/core';
import { iTodo } from '../../Modules/i-todo';
import { iUser } from '../../Modules/i-user';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss'
})
export class SingleTodoComponent {

  @Input() toDo!: iTodo

}
