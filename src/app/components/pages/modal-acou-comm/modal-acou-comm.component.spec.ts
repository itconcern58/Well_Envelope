import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcouCommComponent } from './modal-acou-comm.component';

describe('ModalAcouCommComponent', () => {
  let component: ModalAcouCommComponent;
  let fixture: ComponentFixture<ModalAcouCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAcouCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcouCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
