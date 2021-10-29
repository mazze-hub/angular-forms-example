import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PasswordChangeComponent} from "./components/password-change/password-change.component";

const routes: Routes = [
  {path: 'pw-change', component: PasswordChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
