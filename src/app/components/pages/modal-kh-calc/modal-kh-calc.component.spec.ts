import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKHCalcComponent } from './modal-kh-calc.component';

describe('ModalKHCalcComponent', () => {
  let component: ModalKHCalcComponent;
  let fixture: ComponentFixture<ModalKHCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKHCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKHCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
