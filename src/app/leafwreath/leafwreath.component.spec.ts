import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafwreathComponent } from './leafwreath.component';

describe('LeafwreathComponent', () => {
  let component: LeafwreathComponent;
  let fixture: ComponentFixture<LeafwreathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafwreathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafwreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
