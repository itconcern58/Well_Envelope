import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMbhpOwnComponent } from './modal-mbhp-own.component';

describe('ModalMbhpOwnComponent', () => {
  let component: ModalMbhpOwnComponent;
  let fixture: ComponentFixture<ModalMbhpOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMbhpOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMbhpOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
