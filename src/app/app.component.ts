import { Component } from '@angular/core';
import { User } from "src/app/user";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: Observable<User | null> = this.authService.user;


  constructor(private router: Router, private authService: AuthService) {

  }

  doLogout() {
    this.authService.logout()
    this.router.navigate(['logged-out'])
  }



}
