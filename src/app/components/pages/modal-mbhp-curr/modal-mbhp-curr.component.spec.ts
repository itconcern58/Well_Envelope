import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMbhpCurrComponent } from './modal-mbhp-curr.component';

describe('ModalMbhpCurrComponent', () => {
  let component: ModalMbhpCurrComponent;
  let fixture: ComponentFixture<ModalMbhpCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMbhpCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMbhpCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
