import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKhComponent } from './modal-kh.component';

describe('ModalKhComponent', () => {
  let component: ModalKhComponent;
  let fixture: ComponentFixture<ModalKhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
