import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMbhpFlagComponent } from './modal-mbhp-flag.component';

describe('ModalMbhpFlagComponent', () => {
  let component: ModalMbhpFlagComponent;
  let fixture: ComponentFixture<ModalMbhpFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMbhpFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMbhpFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
