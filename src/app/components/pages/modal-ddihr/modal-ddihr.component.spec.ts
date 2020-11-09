import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdihrComponent } from './modal-ddihr.component';

describe('ModalDdihrComponent', () => {
  let component: ModalDdihrComponent;
  let fixture: ComponentFixture<ModalDdihrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdihrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdihrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
