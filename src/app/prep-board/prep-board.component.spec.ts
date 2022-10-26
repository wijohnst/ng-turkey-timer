import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepBoardComponent } from './prep-board.component';

describe('PrepBoardComponent', () => {
  let component: PrepBoardComponent;
  let fixture: ComponentFixture<PrepBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
