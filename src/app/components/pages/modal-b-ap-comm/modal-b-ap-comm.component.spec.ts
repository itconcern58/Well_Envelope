import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBApCommComponent } from './modal-b-ap-comm.component';

describe('ModalBApCommComponent', () => {
  let component: ModalBApCommComponent;
  let fixture: ComponentFixture<ModalBApCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBApCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBApCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
