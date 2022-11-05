import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNavComponent } from './view-nav.component';

describe('ViewNavComponent', () => {
  let component: ViewNavComponent;
  let fixture: ComponentFixture<ViewNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
