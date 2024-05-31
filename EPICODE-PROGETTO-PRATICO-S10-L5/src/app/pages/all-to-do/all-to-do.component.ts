import { Component } from '@angular/core';
import { iTodo } from '../../Modules/i-todo';
import { UsersService } from '../../Services/users.service';
import { ToDoService } from '../../Services/to-do.service';
import { iUser } from '../../Modules/i-user';

@Component({
  selector: 'app-all-to-do',
  templateUrl:'./all-to-do.component.html',
  styleUrl: './all-to-do.component.scss'
})
export class AllToDoComponent {
  query!: string


  constructor(private usersSvc: UsersService, private toDoSvc: ToDoService) {}
  toDoArrWithUser: iTodo[] = []
  usersArrwithTodo: iUser[] =[]

  ngOnInit() {
  this.toDoArrWithUser =this.toDoSvc.getUserWithPosts()
  console.log(this.toDoArrWithUser)


  }


  searchToDobyUser(query:string) {
    this.toDoArrWithUser = this.toDoSvc.searchByUser(query)
  }
}

