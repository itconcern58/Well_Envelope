import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBapFlagComponent } from './modal-b-ap-flag.component';

describe('ModalAcouFlagComponent', () => {
  let component: ModalBapFlagComponent;
  let fixture: ComponentFixture<ModalBapFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBapFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBapFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
