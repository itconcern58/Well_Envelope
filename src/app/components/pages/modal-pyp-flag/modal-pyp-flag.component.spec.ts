import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPypFlagComponent } from './modal-pyp-flag.component';

describe('ModalPypFlagComponent', () => {
  let component: ModalPypFlagComponent;
  let fixture: ComponentFixture<ModalPypFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPypFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPypFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
