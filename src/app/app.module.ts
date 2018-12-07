import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

import { AppRouter } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
