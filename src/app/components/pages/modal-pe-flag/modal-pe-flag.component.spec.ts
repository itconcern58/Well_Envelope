import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeFlagComponent } from './modal-pe-flag.component';

describe('ModalPeFlagComponent', () => {
  let component: ModalPeFlagComponent;
  let fixture: ComponentFixture<ModalPeFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPeFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPeFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
