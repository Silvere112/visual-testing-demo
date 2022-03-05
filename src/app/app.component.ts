import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: Observable<string | null> = this.authService.username;


  constructor(private router: Router, private authService: AuthService) {
  }

  doLogout() {
    this.authService.logout()
  }



}
