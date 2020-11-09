import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPtCommComponent } from './modal-pt-comm.component';

describe('ModalPtCommComponent', () => {
  let component: ModalPtCommComponent;
  let fixture: ComponentFixture<ModalPtCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPtCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPtCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
