import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PmtCalendarModule } from '../pmtCalendar/calendar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PmtCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
