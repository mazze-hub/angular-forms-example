import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordChangeComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
