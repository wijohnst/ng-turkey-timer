import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrackerDotComponent } from './view-tracker-dot.component';

describe('ViewTrackerDotComponent', () => {
  let component: ViewTrackerDotComponent;
  let fixture: ComponentFixture<ViewTrackerDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrackerDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrackerDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
