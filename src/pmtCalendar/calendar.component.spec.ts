import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
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
});
