import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPiComponent } from './modal-pi.component';

describe('ModalPiComponent', () => {
  let component: ModalPiComponent;
  let fixture: ComponentFixture<ModalPiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
