import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFwhtOwnComponent } from './modal-fwht-own.component';

describe('ModalFwhtOwnComponent', () => {
  let component: ModalFwhtOwnComponent;
  let fixture: ComponentFixture<ModalFwhtOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFwhtOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFwhtOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
