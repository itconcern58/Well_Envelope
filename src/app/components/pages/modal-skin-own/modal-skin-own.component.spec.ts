import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkinOwnComponent } from './modal-skin-own.component';

describe('ModalSkinOwnComponent', () => {
  let component: ModalSkinOwnComponent;
  let fixture: ComponentFixture<ModalSkinOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSkinOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSkinOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
