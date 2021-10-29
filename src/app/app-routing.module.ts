import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PasswordChangeComponent} from "./components/password-change/password-change.component";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path: 'pw-change', component: PasswordChangeComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
