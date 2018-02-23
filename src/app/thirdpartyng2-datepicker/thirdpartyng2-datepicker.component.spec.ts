import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thirdpartyng2DatepickerComponent } from './thirdpartyng2-datepicker.component';

describe('Thirdpartyng2DatepickerComponent', () => {
  let component: Thirdpartyng2DatepickerComponent;
  let fixture: ComponentFixture<Thirdpartyng2DatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thirdpartyng2DatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thirdpartyng2DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
