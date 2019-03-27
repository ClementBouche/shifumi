import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../../shared/app-material.module';

import { PlayListComponent } from './play-list/play-list.component';
import { PlayAddButtonComponent } from './play-add-button/play-add-button.component';

@NgModule({
  declarations: [
    PlayListComponent,
    PlayAddButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ],
  exports: [
    PlayListComponent,
    PlayAddButtonComponent,
  ]
})
export class PlaySharedModule { }
