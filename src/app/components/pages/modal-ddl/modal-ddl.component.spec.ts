import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdlComponent } from './modal-ddl.component';

describe('ModalDdlComponent', () => {
  let component: ModalDdlComponent;
  let fixture: ComponentFixture<ModalDdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
