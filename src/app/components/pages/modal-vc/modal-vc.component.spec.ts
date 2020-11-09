import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVCComponent } from './modal-vc.component';

describe('ModalVCComponent', () => {
  let component: ModalVCComponent;
  let fixture: ComponentFixture<ModalVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
