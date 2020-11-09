import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPiCommComponent } from './modal-pi-comm.component';

describe('ModalPiCommComponent', () => {
  let component: ModalPiCommComponent;
  let fixture: ComponentFixture<ModalPiCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPiCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPiCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
