import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPpCommComponent } from './modal-pp-comm.component';

describe('ModalPpCommComponent', () => {
  let component: ModalPpCommComponent;
  let fixture: ComponentFixture<ModalPpCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPpCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPpCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
