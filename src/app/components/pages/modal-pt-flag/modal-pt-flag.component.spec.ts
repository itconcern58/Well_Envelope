import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPtFlagComponent } from './modal-pt-flag.component';

describe('ModalPtFlagComponent', () => {
  let component: ModalPtFlagComponent;
  let fixture: ComponentFixture<ModalPtFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPtFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPtFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
