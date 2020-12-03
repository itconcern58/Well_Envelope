import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDDthrCalcComponent } from './modal-ddthr-calc.component';

describe('ModalDDthrCalcComponent', () => {
  let component: ModalDDthrCalcComponent;
  let fixture: ComponentFixture<ModalDDthrCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDDthrCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDDthrCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
