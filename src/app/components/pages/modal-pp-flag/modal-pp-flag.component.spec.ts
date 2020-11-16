import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPpFlagComponent } from './modal-pp-flag.component';

describe('ModalPpFlagComponent', () => {
  let component: ModalPpFlagComponent;
  let fixture: ComponentFixture<ModalPpFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPpFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPpFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
