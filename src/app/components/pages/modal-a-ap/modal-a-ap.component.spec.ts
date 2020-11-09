import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAAPComponent } from './modal-a-ap.component';

describe('ModalAAPComponent', () => {
  let component: ModalAAPComponent;
  let fixture: ComponentFixture<ModalAAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
