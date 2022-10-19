import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLeafComponent } from './number-leaf.component';

describe('NumberLeafComponent', () => {
  let component: NumberLeafComponent;
  let fixture: ComponentFixture<NumberLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
