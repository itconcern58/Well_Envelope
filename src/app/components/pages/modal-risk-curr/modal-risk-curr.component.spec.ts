import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskCurrComponent } from './modal-risk-curr.component';

describe('ModalRiskCurrComponent', () => {
  let component: ModalRiskCurrComponent;
  let fixture: ComponentFixture<ModalRiskCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRiskCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
