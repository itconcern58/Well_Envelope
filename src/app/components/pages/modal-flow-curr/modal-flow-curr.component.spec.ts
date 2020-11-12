import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFlowCurrComponent } from './modal-flow-curr.component';

describe('ModalFlowCurrComponent', () => {
  let component: ModalFlowCurrComponent;
  let fixture: ComponentFixture<ModalFlowCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFlowCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFlowCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
