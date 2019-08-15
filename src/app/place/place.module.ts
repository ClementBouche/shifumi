import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ChartSharedModule } from '../chart-shared/chart-shared.module';
import { PlaceRoutingModule } from './place-routing.module';
import { PlaceHomeComponent } from './place-home/place-home.component';
import { PlaceViewComponent } from './place-view/place-view.component';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceHomeComponent,
    PlaceViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlaceRoutingModule,
    AppMaterialModule,
    SharedModule,
    ChartSharedModule
  ]
})
export class PlaceModule { }
