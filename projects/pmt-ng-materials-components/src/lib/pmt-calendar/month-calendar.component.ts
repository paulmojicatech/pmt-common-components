import { Component, OnInit } from '@angular/core';
import { Month } from './models/calendar.interface';

@Component({
    selector: 'pmt-month-calendar',
    templateUrl: './month-calendar.component.html',
    styleUrls: ['./month-calendar.component.scss']
})

export class MonthCalendarComponent implements OnInit {

    monthList: string[] = [];

    constructor() { }

    ngOnInit():void {
        this.monthList = Object.keys(Month).map(key => Month[key]);
    }
}