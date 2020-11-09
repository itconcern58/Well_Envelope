import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVSComponent } from './modal-vs.component';

describe('ModalVSComponent', () => {
  let component: ModalVSComponent;
  let fixture: ComponentFixture<ModalVSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
