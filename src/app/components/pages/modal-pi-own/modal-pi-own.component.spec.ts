import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPiOwnComponent } from './modal-pi-own.component';

describe('ModalPiOwnComponent', () => {
  let component: ModalPiOwnComponent;
  let fixture: ComponentFixture<ModalPiOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPiOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPiOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
