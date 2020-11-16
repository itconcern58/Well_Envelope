import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVsFlagComponent } from './modal-vs-flag.component';

describe('ModalVsFlagComponent', () => {
  let component: ModalVsFlagComponent;
  let fixture: ComponentFixture<ModalVsFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVsFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVsFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
