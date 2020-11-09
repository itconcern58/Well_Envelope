import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDd1hrCommComponent } from './modal-dd1hr-comm.component';

describe('ModalDd1hrCommComponent', () => {
  let component: ModalDd1hrCommComponent;
  let fixture: ComponentFixture<ModalDd1hrCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDd1hrCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDd1hrCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
