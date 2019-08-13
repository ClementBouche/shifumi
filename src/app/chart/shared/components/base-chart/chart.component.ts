import { Component, OnInit, Input } from '@angular/core';

import { ChartData } from '../../model/chart-data.model';

@Component({
  selector: 'app-base-chart',
  template: `
    <div class="base-chart-container">
      <canvas [appChart]="chartData" id="canvas"></canvas>
    </div>
  `,
  styles: [`
    .base-chart-container {
      width: 400px;
    }
  `]
})
export class BaseChartComponent implements OnInit {

  @Input() chartData: ChartData;

  constructor() { }

  ngOnInit() {}

}
