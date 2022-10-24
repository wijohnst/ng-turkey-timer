import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafTimerComponent } from './leaf-timer.component';

describe('LeafTimerComponent', () => {
  let component: LeafTimerComponent;
  let fixture: ComponentFixture<LeafTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
