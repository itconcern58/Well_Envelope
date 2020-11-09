import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVcCommComponent } from './modal-vc-comm.component';

describe('ModalVcCommComponent', () => {
  let component: ModalVcCommComponent;
  let fixture: ComponentFixture<ModalVcCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVcCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVcCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
