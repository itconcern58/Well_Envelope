import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEnvelopeComponent } from './equipment-envelope.component';

describe('EquipmentEnvelopeComponent', () => {
  let component: EquipmentEnvelopeComponent;
  let fixture: ComponentFixture<EquipmentEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
