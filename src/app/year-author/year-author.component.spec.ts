import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearAuthorComponent } from './year-author.component';

describe('YearAuthorComponent', () => {
  let component: YearAuthorComponent;
  let fixture: ComponentFixture<YearAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
