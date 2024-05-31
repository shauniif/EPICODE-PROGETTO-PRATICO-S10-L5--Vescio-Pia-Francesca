import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllToDoComponent } from './pages/all-to-do/all-to-do.component';
import { AllToDoCompletedComponent } from './pages/all-to-do-completed/all-to-do-completed.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [

  {
    path:'all-to-do',
    component:AllToDoComponent,
  },
  {
    path:'to-do-completed',
    title: 'Completati',
    component: AllToDoCompletedComponent
  },
  {
    path:'all-users',
    component: AllUsersComponent
  },
  {
    path:'**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
