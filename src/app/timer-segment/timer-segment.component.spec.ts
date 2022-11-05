import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSegmentComponent } from './timer-segment.component';

describe('TimerSegmentComponent', () => {
  let component: TimerSegmentComponent;
  let fixture: ComponentFixture<TimerSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
