import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkComponent } from './modal-sk.component';

describe('ModalSkComponent', () => {
  let component: ModalSkComponent;
  let fixture: ComponentFixture<ModalSkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
