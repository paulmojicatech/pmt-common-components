import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';

import { CalendarComponent } from './calendar.component';
import { MonthCalendarComponent } from './month-calendar.component';
import { WeekCalendarComponent } from './week-calendar.component';
import { DayCalendarComponent } from './day-calendar.component';

@NgModule({
  declarations: [
    CalendarComponent,
    MonthCalendarComponent,
    WeekCalendarComponent,
    DayCalendarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CalendarComponent
  ]
})

export class PmtCalendarModule {
  constructor(private injector:Injector){ }
  
  ngDoBootstrap(){
    const el = createCustomElement(CalendarComponent, { injector: this.injector });
    customElements.define('pmt-calendar', el);
  }
 }
