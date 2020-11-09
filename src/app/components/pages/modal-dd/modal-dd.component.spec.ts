import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdComponent } from './modal-dd.component';

describe('ModalDdComponent', () => {
  let component: ModalDdComponent;
  let fixture: ComponentFixture<ModalDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
