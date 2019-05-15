import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../../shared/app-material.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { WinnerPipe } from './pipes/winner.pipe';
import { PlayListComponent } from './components/play-list/play-list.component';
import { PlayInfoComponent } from './components/play-info/play-info.component';
import { PlayScoreComponent } from './components/play-score/play-score.component';
import { PlayStreamComponent } from './components/play-stream/play-stream.component';
import { PlayCardComponent } from './components/play-card/play-card.component';

@NgModule({
  declarations: [
    PlayListComponent,
    PlayInfoComponent,
    PlayScoreComponent,
    WinnerPipe,
    PlayStreamComponent,
    PlayCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    SharedModule,
  ],
  exports: [
    PlayListComponent,
    PlayInfoComponent,
    PlayScoreComponent,
    WinnerPipe
  ]
})
export class PlaySharedModule { }
