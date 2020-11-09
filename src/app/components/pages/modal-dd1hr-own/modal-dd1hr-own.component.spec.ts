import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDd1hrOwnComponent } from './modal-dd1hr-own.component';

describe('ModalDd1hrOwnComponent', () => {
  let component: ModalDd1hrOwnComponent;
  let fixture: ComponentFixture<ModalDd1hrOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDd1hrOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDd1hrOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
