import { Component } from '@angular/core';
import { iTodo } from '../../Modules/i-todo';
import { UsersService } from '../../Services/users.service';
import { ToDoService } from '../../Services/to-do.service';

@Component({
  selector: 'app-all-to-do',
  templateUrl: './all-to-do.component.html',
  styleUrl: './all-to-do.component.scss'
})
export class AllToDoComponent {

  toDoArrWithUser: iTodo[] = [];
  constructor(private usersSvc:UsersService, private toDoSvc:ToDoService) {}
  ngOninit(){
    this.toDoArrWithUser = this.toDoSvc.getUserWithPosts();
    console.log(this.toDoArrWithUser)
  }
}
