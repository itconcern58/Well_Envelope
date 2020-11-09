import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPtOwnComponent } from './modal-pt-own.component';

describe('ModalPtOwnComponent', () => {
  let component: ModalPtOwnComponent;
  let fixture: ComponentFixture<ModalPtOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPtOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPtOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
