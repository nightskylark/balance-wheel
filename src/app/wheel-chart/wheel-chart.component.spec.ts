import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelChartComponent } from './wheel-chart.component';

describe('WheelChartComponent', () => {
  let component: WheelChartComponent;
  let fixture: ComponentFixture<WheelChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
