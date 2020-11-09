import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkinCommComponent } from './modal-skin-comm.component';

describe('ModalSkinCommComponent', () => {
  let component: ModalSkinCommComponent;
  let fixture: ComponentFixture<ModalSkinCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSkinCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSkinCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
