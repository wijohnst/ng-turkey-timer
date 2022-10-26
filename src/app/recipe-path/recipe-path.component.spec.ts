import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePathComponent } from './recipe-path.component';

describe('RecipePathComponent', () => {
  let component: RecipePathComponent;
  let fixture: ComponentFixture<RecipePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
