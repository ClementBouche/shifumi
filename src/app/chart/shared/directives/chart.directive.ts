import { Directive, Input, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';

import { ChartData } from '../model/chart-data.model';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective implements OnChanges {

  @Input() appChart: ChartData;

  constructor(
    private elementRef: ElementRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): any {
    if ('appChart' in changes) {
      const chart = new Chart(this.elementRef.nativeElement, this.appChart);
    }
  }

}
