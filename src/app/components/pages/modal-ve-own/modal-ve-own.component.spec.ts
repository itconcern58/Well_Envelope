import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVeOwnComponent } from './modal-ve-own.component';

describe('ModalVeOwnComponent', () => {
  let component: ModalVeOwnComponent;
  let fixture: ComponentFixture<ModalVeOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVeOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVeOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
