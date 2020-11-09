import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKhLimComponent } from './modal-kh-lim.component';

describe('ModalKhLimComponent', () => {
  let component: ModalKhLimComponent;
  let fixture: ComponentFixture<ModalKhLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKhLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKhLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
