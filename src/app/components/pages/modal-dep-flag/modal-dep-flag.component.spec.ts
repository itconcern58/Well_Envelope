import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepFlagComponent } from './modal-dep-flag.component';

describe('ModalDepFlagComponent', () => {
  let component: ModalDepFlagComponent;
  let fixture: ComponentFixture<ModalDepFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDepFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
