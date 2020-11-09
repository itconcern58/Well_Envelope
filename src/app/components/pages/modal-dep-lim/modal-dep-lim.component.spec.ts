import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepLimComponent } from './modal-dep-lim.component';

describe('ModalDepLimComponent', () => {
  let component: ModalDepLimComponent;
  let fixture: ComponentFixture<ModalDepLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDepLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
