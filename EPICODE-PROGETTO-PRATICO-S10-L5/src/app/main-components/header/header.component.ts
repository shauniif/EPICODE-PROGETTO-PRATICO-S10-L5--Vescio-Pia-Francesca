import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showN: boolean = false;
toggleNavbar() {
  this.showN = !this.showN;
  console.log(this.showN);

}
}
