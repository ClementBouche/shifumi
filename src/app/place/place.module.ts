import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlaceRoutingModule } from './place-routing.module';
import { PlaceHomeComponent } from './place-home/place-home.component';
import { PlaceViewComponent } from './place-view/place-view.component';
import { AppMaterialModule } from '../shared/app-material.module';

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
  ]
})
export class PlaceModule { }
