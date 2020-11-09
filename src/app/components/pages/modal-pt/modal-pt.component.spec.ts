import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPTComponent } from './modal-pt.component';

describe('ModalPTComponent', () => {
  let component: ModalPTComponent;
  let fixture: ComponentFixture<ModalPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
