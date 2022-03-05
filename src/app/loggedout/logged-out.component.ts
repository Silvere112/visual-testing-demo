import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-loggedout',
  template: `

    <h2>Sign in for the Visual Testing Demonstration </h2>

    <p>
      Before attending to the event please do not forget to sign in with the given form
    </p>

    <app-form
      placeHolder="Username"
      actionLabel="Sign In"
      color="primary"
      (onSubmit)="onLoggedIn($event)">
    </app-form>


    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices placerat risus nec congue. Nulla lacus
      mauris, eleifend interdum tellus ac, egestas rutrum nisl. Phasellus euismod pellentesque dui, sed convallis augue
      faucibus vel. Nunc interdum odio non risus gravida, id maximus est pellentesque. In hac habitasse platea dictumst.
      Nam sit amet sollicitudin dolor. Nunc et magna id purus semper mattis. Morbi a pellentesque ex, vitae pretium
      tellus.
    </p>

    <div class="tip-wrapper">
      <span class="tip">Tip</span> You can ask questions after and during the demonstration
    </div>
  `,
  styles: []
})
export class LoggedOutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLoggedIn(username: string) {
    this.authService.login({username})

  }
}
