import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVsLimComponent } from './modal-vs-lim.component';

describe('ModalVsLimComponent', () => {
  let component: ModalVsLimComponent;
  let fixture: ComponentFixture<ModalVsLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVsLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVsLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
