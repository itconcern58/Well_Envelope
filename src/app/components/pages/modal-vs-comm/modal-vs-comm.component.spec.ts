import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVsCommComponent } from './modal-vs-comm.component';

describe('ModalVsCommComponent', () => {
  let component: ModalVsCommComponent;
  let fixture: ComponentFixture<ModalVsCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVsCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVsCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
