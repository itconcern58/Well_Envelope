import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAApCommComponent } from './modal-a-ap-comm.component';

describe('ModalAApCommComponent', () => {
  let component: ModalAApCommComponent;
  let fixture: ComponentFixture<ModalAApCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAApCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAApCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
