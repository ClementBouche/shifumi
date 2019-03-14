import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';
import { PlayViewComponent } from './play-view/play-view.component';
import { PlayAddComponent } from './play-add/play-add.component';
import { PlaySharedModule } from './shared/play-shared.module';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [
    PlayComponent,
    PlayViewComponent,
    PlayAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayRoutingModule,
    PlaySharedModule,
    AppMaterialModule
  ],
  exports: [
  ]
})
export class PlayModule { }
