import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeOwnComponent } from './modal-pe-own.component';

describe('ModalPeOwnComponent', () => {
  let component: ModalPeOwnComponent;
  let fixture: ComponentFixture<ModalPeOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPeOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPeOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
