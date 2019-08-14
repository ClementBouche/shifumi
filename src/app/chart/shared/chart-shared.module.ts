import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartComponent } from './components/base-chart/chart.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { ChartDirective } from './directives/chart.directive';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { RowColorDirective } from './directives/row-color.directive';
import { BoardgameTableComponent } from './components/boardgame-table/boardgame-table.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BaseChartComponent,
    BaseTableComponent,
    BoardgameTableComponent,
    ChartDirective,
    RowColorDirective,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
  ],
  exports: [
    BaseChartComponent,
    BaseTableComponent,
    BoardgameTableComponent,
    ChartDirective,
  ]
})
export class ChartSharedModule { }
