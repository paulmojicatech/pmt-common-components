import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pmt-month-calendar',
    templateUrl: './month-calendar.component.html',
    styleUrls: ['./month-calendar.component.scss']
})

export class MonthCalendarComponent implements OnInit {
    constructor() { }

    ngOnInit():void {
        console.log('MONTH');
    }
}