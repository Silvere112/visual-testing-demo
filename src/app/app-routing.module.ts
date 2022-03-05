import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInComponent } from "src/app/loggedin/logged-in.component";
import { LoggedOutComponent } from "src/app/loggedout/logged-out.component";

const routes: Routes = [
  { path: 'logged-in', component: LoggedInComponent },
  { path: 'logged-out', component: LoggedOutComponent },
  { path: '**', redirectTo: 'logged-out' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
