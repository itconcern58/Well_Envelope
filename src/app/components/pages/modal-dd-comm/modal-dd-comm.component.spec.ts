import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdCommComponent } from './modal-dd-comm.component';

describe('ModalDdCommComponent', () => {
  let component: ModalDdCommComponent;
  let fixture: ComponentFixture<ModalDdCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
