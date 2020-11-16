import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVcFlagComponent } from './modal-vc-flag.component';

describe('ModalVcFlagComponent', () => {
  let component: ModalVcFlagComponent;
  let fixture: ComponentFixture<ModalVcFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVcFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVcFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
