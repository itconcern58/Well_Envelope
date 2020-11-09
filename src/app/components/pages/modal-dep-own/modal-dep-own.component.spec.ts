import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepOwnComponent } from './modal-dep-own.component';

describe('ModalDepOwnComponent', () => {
  let component: ModalDepOwnComponent;
  let fixture: ComponentFixture<ModalDepOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDepOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
