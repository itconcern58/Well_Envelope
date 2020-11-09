import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKhCommComponent } from './modal-kh-comm.component';

describe('ModalKhCommComponent', () => {
  let component: ModalKhCommComponent;
  let fixture: ComponentFixture<ModalKhCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKhCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKhCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
