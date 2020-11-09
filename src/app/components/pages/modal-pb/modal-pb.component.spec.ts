import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPbComponent } from './modal-pb.component';

describe('ModalPbComponent', () => {
  let component: ModalPbComponent;
  let fixture: ComponentFixture<ModalPbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
