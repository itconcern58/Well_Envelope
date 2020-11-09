import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVcLimComponent } from './modal-vc-lim.component';

describe('ModalVcLimComponent', () => {
  let component: ModalVcLimComponent;
  let fixture: ComponentFixture<ModalVcLimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVcLimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVcLimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
