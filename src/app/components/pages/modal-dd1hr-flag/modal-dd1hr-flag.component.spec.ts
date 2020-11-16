import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDd1hrFlagComponent } from './modal-dd1hr-flag.component';

describe('ModalDd1hrFlagComponent', () => {
  let component: ModalDd1hrFlagComponent;
  let fixture: ComponentFixture<ModalDd1hrFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDd1hrFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDd1hrFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
