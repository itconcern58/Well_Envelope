import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeCommComponent } from './modal-pe-comm.component';

describe('ModalPeCommComponent', () => {
  let component: ModalPeCommComponent;
  let fixture: ComponentFixture<ModalPeCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPeCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPeCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
