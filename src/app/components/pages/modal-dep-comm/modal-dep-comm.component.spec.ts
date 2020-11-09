import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepCommComponent } from './modal-dep-comm.component';

describe('ModalDepCommComponent', () => {
  let component: ModalDepCommComponent;
  let fixture: ComponentFixture<ModalDepCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDepCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
