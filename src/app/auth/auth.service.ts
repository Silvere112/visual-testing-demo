import { Injectable } from '@angular/core';
import { User } from "src/app/user";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new Subject<User | null> ()
  user: Observable<User | null> = this.userSubject.asObservable()

  constructor() { }

  login(user: User){
    this.userSubject.next(user)
  }

  logout(){
    this.userSubject.next(null)
  }

}
