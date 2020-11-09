import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPypCommComponent } from './modal-pyp-comm.component';

describe('ModalPypCommComponent', () => {
  let component: ModalPypCommComponent;
  let fixture: ComponentFixture<ModalPypCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPypCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPypCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
