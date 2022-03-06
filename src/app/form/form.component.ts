import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <mat-form-field class="example-form-field" appearance="outline">
      <mat-label>{{placeHolder}}</mat-label>
      <input matInput type="text" [(ngModel)]="_value">
    </mat-form-field>


    <button class="margin-left" mat-button [class.mat-raised-button]="isRaised" [color]="color" (click)="onClick()">{{actionLabel}}</button>

  `,
  styles: [
    `
      .example-form-field {
        width: 200px;
      }

      .margin-left{
        margin-left: 20px ;
      }
    `
  ]
})
export class FormComponent {
  _value: string = "";

  @Input()
  placeHolder: string = ""

  @Input()
  actionLabel: string = ""

  @Input()
  color: "primary" | "warn" = "primary"

  @Input()
  buttonType: "basic" | "raised" = "raised"


  @Output()
  onSubmit = new EventEmitter<string>()

  constructor() { }


  onClick() {
    this.onSubmit.next(this._value)
  }

  get isRaised(){
    return this.buttonType == "raised"
  }
}
