import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartComponent } from './components/base-chart/chart.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { ChartDirective } from './directives/chart.directive';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { RowColorDirective } from './directives/row-color.directive';


@NgModule({
  declarations: [
    BaseChartComponent,
    BaseTableComponent,
    ChartDirective,
    RowColorDirective,
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    BaseChartComponent,
    BaseTableComponent,
    ChartDirective,
  ]
})
export class ChartSharedModule { }
