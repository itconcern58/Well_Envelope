import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiskCommComponent } from './modal-risk-comm.component';

describe('ModalRiskCommComponent', () => {
  let component: ModalRiskCommComponent;
  let fixture: ComponentFixture<ModalRiskCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRiskCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiskCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
