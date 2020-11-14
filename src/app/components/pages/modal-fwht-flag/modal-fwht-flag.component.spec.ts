import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFwhtFlagComponent } from './modal-fwht-flag.component';

describe('ModalFwhtFlagComponent', () => {
  let component: ModalFwhtFlagComponent;
  let fixture: ComponentFixture<ModalFwhtFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFwhtFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFwhtFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
