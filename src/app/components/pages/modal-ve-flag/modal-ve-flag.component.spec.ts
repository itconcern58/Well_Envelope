import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVeFlagComponent } from './modal-ve-flag.component';

describe('ModalVeFlagComponent', () => {
  let component: ModalVeFlagComponent;
  let fixture: ComponentFixture<ModalVeFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVeFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVeFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
