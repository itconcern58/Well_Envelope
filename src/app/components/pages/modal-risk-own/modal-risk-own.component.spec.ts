import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskOwnComponent } from './modal-risk-own.component';

describe('ModalRiskOwnComponent', () => {
  let component: ModalRiskOwnComponent;
  let fixture: ComponentFixture<ModalRiskOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRiskOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
