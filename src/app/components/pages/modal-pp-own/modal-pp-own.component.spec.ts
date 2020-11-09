import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPpOwnComponent } from './modal-pp-own.component';

describe('ModalPpOwnComponent', () => {
  let component: ModalPpOwnComponent;
  let fixture: ComponentFixture<ModalPpOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPpOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPpOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
