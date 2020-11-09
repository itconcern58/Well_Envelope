import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPPComponent } from './modal-pp.component';

describe('ModalPPComponent', () => {
  let component: ModalPPComponent;
  let fixture: ComponentFixture<ModalPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
