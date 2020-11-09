import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccousSandComponent } from './modal-accous-sand.component';

describe('ModalAccousSandComponent', () => {
  let component: ModalAccousSandComponent;
  let fixture: ComponentFixture<ModalAccousSandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAccousSandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAccousSandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
