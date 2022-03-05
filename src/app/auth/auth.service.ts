import { Injectable } from '@angular/core';
import { User } from "src/app/user";
import { BehaviorSubject, filter, map, Observable, ReplaySubject, Subject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username =  this.route.queryParams.pipe(map(params => params["username"]))

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  login(user: User){
    this.router.navigate(['logged-in'], { queryParams: { username: user.username} })
  }

  logout(){
    console.log("loggout")
    this.router.navigate(['logged-out'])
  }

}
