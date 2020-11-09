import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBAPComponent } from './modal-b-ap.component';

describe('ModalBAPComponent', () => {
  let component: ModalBAPComponent;
  let fixture: ComponentFixture<ModalBAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
