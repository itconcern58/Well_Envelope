import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkLimComponent } from './modal-sk-lim.component';

describe('ModalSkLimComponent', () => {
  let component: ModalSkLimComponent;
  let fixture: ComponentFixture<ModalSkLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSkLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSkLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
