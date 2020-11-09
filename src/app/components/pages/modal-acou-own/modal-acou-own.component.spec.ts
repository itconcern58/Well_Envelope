import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcouOwnComponent } from './modal-acou-own.component';

describe('ModalAcouOwnComponent', () => {
  let component: ModalAcouOwnComponent;
  let fixture: ComponentFixture<ModalAcouOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAcouOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcouOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
