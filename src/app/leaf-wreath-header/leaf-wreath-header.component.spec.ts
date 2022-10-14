import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafWreathHeaderComponent } from './leaf-wreath-header.component';

describe('LeafWreathHeaderComponent', () => {
  let component: LeafWreathHeaderComponent;
  let fixture: ComponentFixture<LeafWreathHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafWreathHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafWreathHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
