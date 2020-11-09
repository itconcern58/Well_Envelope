import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterEnvelopeComponent } from './master-envelope.component';

describe('MasterEnvelopeComponent', () => {
  let component: MasterEnvelopeComponent;
  let fixture: ComponentFixture<MasterEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
