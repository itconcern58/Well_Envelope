import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAApFlagComponent } from './modal-a-ap-flag.component';

describe('ModalAApFlagComponent', () => {
  let component: ModalAApFlagComponent;
  let fixture: ComponentFixture<ModalAApFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAApFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAApFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
