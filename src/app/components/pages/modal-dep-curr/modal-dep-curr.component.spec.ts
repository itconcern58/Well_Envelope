import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepCurrComponent } from './modal-dep-curr.component';

describe('ModalDepCurrComponent', () => {
  let component: ModalDepCurrComponent;
  let fixture: ComponentFixture<ModalDepCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDepCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
