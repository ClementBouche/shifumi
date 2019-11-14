import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventSharedModule } from './shared/event-shared.module';
import { PlayerSharedModule } from '../player/shared/player-shared.module';
import { EventViewComponent } from './event-view/event-view.component';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [
    EventComponent,
    EventHomeComponent,
    EventFormComponent,
    EventViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    EventRoutingModule,
    EventSharedModule,
    PlayerSharedModule,
  ]
})
export class EventModule { }
