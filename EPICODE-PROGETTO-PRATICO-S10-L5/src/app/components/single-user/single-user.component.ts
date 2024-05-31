import { Component, Input } from '@angular/core';
import { iUser } from '../../Modules/i-user';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss'
})
export class SingleUserComponent {

  @Input() user!: iUser
}
