import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrComponent } from './modal-pr.component';

describe('ModalPrComponent', () => {
  let component: ModalPrComponent;
  let fixture: ComponentFixture<ModalPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
