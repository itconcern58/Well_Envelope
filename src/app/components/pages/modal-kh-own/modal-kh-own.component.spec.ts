import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKhOwnComponent } from './modal-kh-own.component';

describe('ModalKhOwnComponent', () => {
  let component: ModalKhOwnComponent;
  let fixture: ComponentFixture<ModalKhOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKhOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKhOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
