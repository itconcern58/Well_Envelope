import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPiNextComponent } from './modal-pi-next.component';

describe('ModalPiNextComponent', () => {
  let component: ModalPiNextComponent;
  let fixture: ComponentFixture<ModalPiNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPiNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPiNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
