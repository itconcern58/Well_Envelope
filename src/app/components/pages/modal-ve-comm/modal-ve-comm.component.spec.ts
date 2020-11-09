import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVeCommComponent } from './modal-ve-comm.component';

describe('ModalVeCommComponent', () => {
  let component: ModalVeCommComponent;
  let fixture: ComponentFixture<ModalVeCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVeCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVeCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
