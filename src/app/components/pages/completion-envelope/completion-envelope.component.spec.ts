import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionEnvelopeComponent } from './completion-envelope.component';

describe('CompletionEnvelopeComponent', () => {
  let component: CompletionEnvelopeComponent;
  let fixture: ComponentFixture<CompletionEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
