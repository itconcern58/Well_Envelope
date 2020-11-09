import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVEComponent } from './modal-ve.component';

describe('ModalVEComponent', () => {
  let component: ModalVEComponent;
  let fixture: ComponentFixture<ModalVEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
