import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPypOwnComponent } from './modal-pyp-own.component';

describe('ModalPypOwnComponent', () => {
  let component: ModalPypOwnComponent;
  let fixture: ComponentFixture<ModalPypOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPypOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPypOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
