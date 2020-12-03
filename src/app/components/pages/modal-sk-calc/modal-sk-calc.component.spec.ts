import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSKCalcComponent } from './modal-sk-calc.component';

describe('ModalSKCalcComponent', () => {
  let component: ModalSKCalcComponent;
  let fixture: ComponentFixture<ModalSKCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSKCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSKCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
