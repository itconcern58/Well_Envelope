import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPiLimComponent } from './modal-pi-lim.component';

describe('ModalPiLimComponent', () => {
  let component: ModalPiLimComponent;
  let fixture: ComponentFixture<ModalPiLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPiLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPiLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
