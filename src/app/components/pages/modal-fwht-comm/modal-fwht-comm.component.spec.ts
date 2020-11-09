import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFwhtCommComponent } from './modal-fwht-comm.component';

describe('ModalFwhtCommComponent', () => {
  let component: ModalFwhtCommComponent;
  let fixture: ComponentFixture<ModalFwhtCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFwhtCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFwhtCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
