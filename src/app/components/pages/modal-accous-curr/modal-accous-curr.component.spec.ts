import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccousCurrComponent } from './modal-accous-curr.component';

describe('ModalAccousCurrComponent', () => {
  let component: ModalAccousCurrComponent;
  let fixture: ComponentFixture<ModalAccousCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAccousCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAccousCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
