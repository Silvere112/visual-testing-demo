import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent {

  sizeAsArray = transformNumberToArray(1);

  @Input()
  set size(value: number) {
    this.sizeAsArray = transformNumberToArray(value)
  }

}


function transformNumberToArray(value: number) {
  return [...Array(value).keys()];
}
