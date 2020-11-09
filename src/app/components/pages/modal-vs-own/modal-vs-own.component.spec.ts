import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVsOwnComponent } from './modal-vs-own.component';

describe('ModalVsOwnComponent', () => {
  let component: ModalVsOwnComponent;
  let fixture: ComponentFixture<ModalVsOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVsOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVsOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
