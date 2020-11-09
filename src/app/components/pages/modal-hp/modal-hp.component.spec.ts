import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHPComponent } from './modal-hp.component';

describe('ModalHPComponent', () => {
  let component: ModalHPComponent;
  let fixture: ComponentFixture<ModalHPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
