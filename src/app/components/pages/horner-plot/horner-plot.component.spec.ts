import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HornerPlotComponent } from './horner-plot.component';

describe('HornerPlotComponent', () => {
  let component: HornerPlotComponent;
  let fixture: ComponentFixture<HornerPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HornerPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HornerPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
