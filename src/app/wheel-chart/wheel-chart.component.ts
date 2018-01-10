import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-chart',
  templateUrl: './wheel-chart.component.html',
  styleUrls: ['./wheel-chart.component.css']
})
export class WheelChartComponent implements OnInit {

  @Input('data') data: object;

  constructor() { }

  ngOnInit() {
  }

}
