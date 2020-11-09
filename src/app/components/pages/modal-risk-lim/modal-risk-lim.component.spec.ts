import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskLimComponent } from './modal-risk-lim.component';

describe('ModalRiskLimComponent', () => {
  let component: ModalRiskLimComponent;
  let fixture: ComponentFixture<ModalRiskLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRiskLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
