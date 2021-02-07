import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DayCalendarComponent } from './day-calendar.component';

describe('DayCalendarComponent', () => {
  let component: DayCalendarComponent;
  let fixture: ComponentFixture<DayCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
