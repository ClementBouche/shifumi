import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../shared/app-material.module';

import { GridComponent } from './components/grid/grid.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { ReactiveGridDirective } from './directives/reactive-grid.directive';

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    ReactiveGridDirective,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    GridComponent,
    GridItemComponent,
    ReactiveGridDirective,
  ]
})
export class SharedMaterialModule { }
