import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDd1hrLimComponent } from './modal-dd1hr-lim.component';

describe('ModalDd1hrLimComponent', () => {
  let component: ModalDd1hrLimComponent;
  let fixture: ComponentFixture<ModalDd1hrLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDd1hrLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDd1hrLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
