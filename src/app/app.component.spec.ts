import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material';

import { PmtCalendarModule } from '../pmtCalendar/calendar.module';

import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatButtonModule,
        PmtCalendarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /* #region: Start Calendar Component Test */

  it('should contain the calendar component', () => {
    const nativeCalendar = el.querySelectorAll('pmt-calendar');
    expect(nativeCalendar.length).toBe(1, 'Calendar exists');
  })

  /* #endregion */

});
