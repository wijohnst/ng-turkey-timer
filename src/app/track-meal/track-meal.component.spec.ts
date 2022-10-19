import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMealComponent } from './track-meal.component';

describe('TrackMealComponent', () => {
  let component: TrackMealComponent;
  let fixture: ComponentFixture<TrackMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
