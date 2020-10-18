import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionEnvelopeComponent } from './production-envelope.component';

describe('ProductionEnvelopeComponent', () => {
  let component: ProductionEnvelopeComponent;
  let fixture: ComponentFixture<ProductionEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
