import { Component } from '@angular/core';
import { ToDoService } from '../../Services/to-do.service';
import { UsersService } from '../../Services/users.service';
import { iUser } from '../../Modules/i-user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {

  toDowithUser!:iUser[]
  constructor(private usersSvc: UsersService, private toDoSvc: ToDoService) {}
ngOnInit() {

  this.toDowithUser = this.toDoSvc.getPostsForUsers()
   console.log(this.toDowithUser)
}
}
