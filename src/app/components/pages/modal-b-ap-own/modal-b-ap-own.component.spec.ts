import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBApOwnComponent } from './modal-b-ap-own.component';

describe('ModalBApOwnComponent', () => {
  let component: ModalBApOwnComponent;
  let fixture: ComponentFixture<ModalBApOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBApOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBApOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
