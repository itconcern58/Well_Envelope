import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdOwnComponent } from './modal-dd-own.component';

describe('ModalDdOwnComponent', () => {
  let component: ModalDdOwnComponent;
  let fixture: ComponentFixture<ModalDdOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
