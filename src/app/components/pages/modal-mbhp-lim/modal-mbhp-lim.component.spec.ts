import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMbhpLimComponent } from './modal-mbhp-lim.component';

describe('ModalMbhpLimComponent', () => {
  let component: ModalMbhpLimComponent;
  let fixture: ComponentFixture<ModalMbhpLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMbhpLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMbhpLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
