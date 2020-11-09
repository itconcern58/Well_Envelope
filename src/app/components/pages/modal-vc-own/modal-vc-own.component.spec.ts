import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVcOwnComponent } from './modal-vc-own.component';

describe('ModalVcOwnComponent', () => {
  let component: ModalVcOwnComponent;
  let fixture: ComponentFixture<ModalVcOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVcOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVcOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
