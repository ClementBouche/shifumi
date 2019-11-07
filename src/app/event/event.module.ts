import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventSharedModule } from './shared/event-shared.module';

@NgModule({
  declarations: [
    EventComponent,
    EventHomeComponent,
    EventFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    EventRoutingModule,
    EventSharedModule
  ]
})
export class EventModule { }
