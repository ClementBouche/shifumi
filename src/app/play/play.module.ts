import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlaySharedModule } from './shared/play-shared.module';
import { AppMaterialModule } from '../shared/app-material.module';

import { PlayComponent } from './play.component';
import { PlayViewComponent } from './play-view/play-view.component';
import { PlayAddComponent } from './play-add/play-add.component';
import { PlayFormComponent } from './play-form/play-form.component';
import { PlayUpdateComponent } from './play-update/play-update.component';

@NgModule({
  declarations: [
    PlayComponent,
    PlayViewComponent,
    PlayAddComponent,
    PlayFormComponent,
    PlayUpdateComponent,
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
