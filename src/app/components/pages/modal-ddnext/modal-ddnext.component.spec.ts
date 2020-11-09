import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDdnextComponent } from './modal-ddnext.component';

describe('ModalDdnextComponent', () => {
  let component: ModalDdnextComponent;
  let fixture: ComponentFixture<ModalDdnextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDdnextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDdnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
