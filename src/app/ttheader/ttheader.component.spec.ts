import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TtheaderComponent } from "./ttheader.component";

describe("TtheaderComponent", () => {
  let component: TtheaderComponent;
  let fixture: ComponentFixture<TtheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TtheaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should display the application name", () => {
    expect(component.applicationName).toBe("Turkey Timer");
  });
});
