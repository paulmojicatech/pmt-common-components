import { PmtAutocompleteModule } from './../pmtAutocomplete/autocomplete.module';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';

import { PmtCalendarModule } from '../pmtCalendar/calendar.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let el:HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatButtonModule,
        PmtCalendarModule,
        PmtAutocompleteModule
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
