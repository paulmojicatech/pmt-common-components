import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { MonthCalendarComponent } from './month-calendar.component';
import { WeekCalendarComponent } from './week-calendar.component';
import { DayCalendarComponent } from './day-calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CalendarComponent,
        WeekCalendarComponent,
        MonthCalendarComponent,
        DayCalendarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain previous and next buttons in calendar navigation section', () => {
    const navDiv = el.querySelector('div.calendar-navigation');
    const btns = navDiv.querySelectorAll('button');
    const prevBtn = Array.from(btns).filter(b => b.textContent == 'Previous');
    const nextBtn = Array.from(btns).filter(b => b.textContent == 'Next');
    expect(prevBtn.length).toBe(1, 'Previous button not found');
    expect(nextBtn.length).toBe(1, 'Next button not found');
  });
  
  it('should contain month, week, and day buttons in calendar type select section', () => {
    const selectDiv = el.querySelector('div.calendar-type-select');
    const btns = selectDiv.querySelectorAll('button');
    const monthBtn = Array.from(btns).filter(b => b.textContent == 'Month');
    const weekBtn = Array.from(btns).filter(b => b.textContent == 'Week');
    const dayBtn = Array.from(btns).filter(b => b.textContent == 'Day');
    expect(monthBtn.length).toBe(1, 'Month button not found');
    expect(weekBtn.length).toBe(1, 'Week button not found');
    expect(dayBtn.length).toBe(1, 'Day button not found');
  });

  it('should update the button to disabled in calendar type select section', () => {
    const selectDiv = el.querySelector('div.calendar-type-select');
    const btns = selectDiv.querySelectorAll('button');
    const monthBtn = Array.from(btns).filter(b => b.textContent == 'Month');
    const dayBtn = Array.from(btns).filter(b => b.textContent == 'Day');
    expect(monthBtn[0].hasAttribute('disabled')).toBeTruthy('Month should be default type');
    dayBtn[0].click();
    fixture.detectChanges();
    expect(dayBtn[0].hasAttribute('disabled')).toBeTruthy('Day should be disabled after click');
  });

  it('should update the type of calendar to display on button click', () => {
    const selectDiv = el.querySelector('div.calendar-type-select');
    const btns = selectDiv.querySelectorAll('button');
    const weekBtn = Array.from(btns).filter(b => b.textContent == 'Week');
    let monthCalendar = el.querySelectorAll('pmt-month-calendar');
    expect(monthCalendar.length).toBe(1, 'Month calendar shown by default');
    weekBtn[0].click();
    fixture.detectChanges();
    monthCalendar = el.querySelectorAll('pmt-month-calendar');
    expect(monthCalendar.length).toBe(0, 'Month calendar should be removed');
    const weekCalendar = el.querySelectorAll('pmt-week-calendar');
    expect(weekCalendar.length).toBe(1, 'Week calendar should show after week button press');
  });
});
