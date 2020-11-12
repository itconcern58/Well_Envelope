import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFlowNextComponent } from './modal-flow-next.component';

describe('ModalFlowNextComponent', () => {
  let component: ModalFlowNextComponent;
  let fixture: ComponentFixture<ModalFlowNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFlowNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFlowNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
