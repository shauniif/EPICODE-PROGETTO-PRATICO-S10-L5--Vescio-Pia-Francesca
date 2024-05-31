import { Component } from '@angular/core';
import { ToDoService } from '../../Services/to-do.service';
import { UsersService } from '../../Services/users.service';
import { iTodo } from '../../Modules/i-todo';

@Component({
  selector: 'app-all-to-do-completed',
  templateUrl: './all-to-do-completed.component.html',
  styleUrl: './all-to-do-completed.component.scss'
})
export class AllToDoCompletedComponent {
  toDoArrWithUserCompleted!: iTodo[]
  constructor(private usersSvc: UsersService, private toDoSvc: ToDoService) {}

  ngOnInit() {
    this.toDoArrWithUserCompleted =this.toDoSvc.getUserWithCompleted()
    console.log(this.toDoArrWithUserCompleted)

    }
}
