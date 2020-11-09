import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFwhtLimComponent } from './modal-fwht-lim.component';

describe('ModalFwhtLimComponent', () => {
  let component: ModalFwhtLimComponent;
  let fixture: ComponentFixture<ModalFwhtLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFwhtLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFwhtLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
