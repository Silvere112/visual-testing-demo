import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-loggedout',
  template: `

    <h2>Welcome</h2>
    <br/>

    <p>
      We recommend building UIs with a
      <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>

    <mat-form-field class="example-form-field" appearance="outline">
      <mat-label>Username</mat-label>
      <input matInput type="text" [(ngModel)]="username">
      <button *ngIf="username" matSuffix mat-icon-button aria-label="Clear" (click)="username=''">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>


    <storybook-button
      size="small"
      [primary]="true"
      class="margin-left"
      (onClick)="onLoggedIn()"
      label="Log in"
    ></storybook-button>


    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>



    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span> Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999"
          />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  `,
  styles: [`

    .example-form-field {
      width: 200px;
    }

    .margin-left{
      margin-left: 20px ;
    }

  `]
})
export class LoggedOutComponent implements OnInit {
  username: string = "";

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLoggedIn() {
    this.authService.login({username: this.username})
    this.router.navigate(['logged-in'])
  }
}
