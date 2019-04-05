import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../../shared/app-material.module';

import { PlayListComponent } from './components/play-list/play-list.component';
import { PlayAddButtonComponent } from './components/play-add-button/play-add-button.component';
import { PlayInfoComponent } from './components/play-info/play-info.component';
import { WinnerPipe } from './pipes/winner.pipe';
import { PlayScoreComponent } from './components/play-score/play-score.component';

@NgModule({
  declarations: [
    PlayListComponent,
    PlayAddButtonComponent,
    PlayInfoComponent,
    PlayScoreComponent,
    WinnerPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ],
  exports: [
    PlayListComponent,
    PlayAddButtonComponent,
    PlayInfoComponent,
    WinnerPipe
  ]
})
export class PlaySharedModule { }
