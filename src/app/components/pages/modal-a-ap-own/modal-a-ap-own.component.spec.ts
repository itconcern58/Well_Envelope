import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAApOwnComponent } from './modal-a-ap-own.component';

describe('ModalAApOwnComponent', () => {
  let component: ModalAApOwnComponent;
  let fixture: ComponentFixture<ModalAApOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAApOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAApOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
