import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { AllToDoComponent } from './pages/all-to-do/all-to-do.component';
import { AllToDoCompletedComponent } from './pages/all-to-do-completed/all-to-do-completed.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllToDoComponent,
    AllToDoCompletedComponent,
    AllUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
