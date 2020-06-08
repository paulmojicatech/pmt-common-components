import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pmt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class CalendarComponent implements OnInit {

  constructor() { }

  selectedView:string = 'Month';

  ngOnInit() {
  }
}
