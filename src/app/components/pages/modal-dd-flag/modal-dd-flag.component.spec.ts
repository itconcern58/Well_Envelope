import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdFlagComponent } from './modal-dd-flag.component';

describe('ModalDdFlagComponent', () => {
  let component: ModalDdFlagComponent;
  let fixture: ComponentFixture<ModalDdFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
