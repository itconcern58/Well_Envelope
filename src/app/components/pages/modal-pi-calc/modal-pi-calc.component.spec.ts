import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPICalcComponent } from './modal-pi-calc.component';

describe('ModalPICalcComponent', () => {
  let component: ModalPICalcComponent;
  let fixture: ComponentFixture<ModalPICalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPICalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPICalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
