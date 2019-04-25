import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmt-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit():void {
    console.log('WEEK');
  }

}
