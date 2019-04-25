import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a previous button', () => {
    const el:HTMLElement = fixture.nativeElement;
    const navDiv = el.querySelector('div.calendar-navigation');
    const btns = navDiv.querySelectorAll('button');
    const prevBtn = Array.from(btns).filter(b => b.textContent == 'Previous');
    expect(prevBtn.length).toBe(1, 'Previous button not found');
  });
});
