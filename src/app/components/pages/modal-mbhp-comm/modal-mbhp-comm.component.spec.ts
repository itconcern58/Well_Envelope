import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMbhpCommComponent } from './modal-mbhp-comm.component';

describe('ModalMbhpCommComponent', () => {
  let component: ModalMbhpCommComponent;
  let fixture: ComponentFixture<ModalMbhpCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMbhpCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMbhpCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
