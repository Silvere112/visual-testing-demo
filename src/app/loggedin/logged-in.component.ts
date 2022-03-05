import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-loggedin',
  template: `
    <h2>We need information, {{username | async}}!</h2>
    <p>
      Don't logout, we need to know what is your job title for the statistics.
    </p>

    <app-form
      color="warn"
      actionLabel="Send & Logout"
      placeHolder="Role"
      (onSubmit)="onSubmit($event)"
    >
    </app-form>

    <p>
      In vel tellus iaculis, malesuada elit vitae, bibendum magna. Donec lacinia at turpis rutrum egestas. Nam consequat
      turpis quis ex blandit, id gravida sem ullamcorper. Nam venenatis nulla nisl, sed sodales mi mattis sit amet.
      Suspendisse ut dolor id odio hendrerit consequat. Fusce rutrum, ipsum id varius ultricies, sem nulla feugiat
      lorem, id elementum tortor justo ac odio. Morbi pharetra nec nunc vel auctor. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. In sodales orci sed elementum consequat.
    </p>

    <div class="tip-wrapper">
      <span class="tip">Tip</span> You can ask question in the chat
    </div>
  `,
  styles: []
})
export class LoggedInComponent implements OnInit {

  username = this.authService.username

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  onSubmit(role: string) {
    console.log(role)
    this.authService.logout()
  }
}
