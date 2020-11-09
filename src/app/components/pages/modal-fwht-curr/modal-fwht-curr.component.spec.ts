import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFwhtCurrComponent } from './modal-fwht-curr.component';

describe('ModalFwhtCurrComponent', () => {
  let component: ModalFwhtCurrComponent;
  let fixture: ComponentFixture<ModalFwhtCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFwhtCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFwhtCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
