import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDd1hrNextComponent } from './modal-dd1hr-next.component';

describe('ModalDd1hrNextComponent', () => {
  let component: ModalDd1hrNextComponent;
  let fixture: ComponentFixture<ModalDd1hrNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDd1hrNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDd1hrNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
