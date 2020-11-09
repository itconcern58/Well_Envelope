import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPEComponent } from './modal-pe.component';

describe('ModalPEComponent', () => {
  let component: ModalPEComponent;
  let fixture: ComponentFixture<ModalPEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
