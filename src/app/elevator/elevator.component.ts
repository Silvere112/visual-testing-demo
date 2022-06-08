import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {


  @Input()
  closed = true

  constructor() { }

  ngOnInit(): void {
  }

}
