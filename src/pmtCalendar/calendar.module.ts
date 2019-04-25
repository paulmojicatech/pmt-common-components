import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  entryComponents: [
    CalendarComponent
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
