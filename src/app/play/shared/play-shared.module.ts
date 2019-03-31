import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../../shared/app-material.module';
import { BoardgameSharedModule } from '../../boardgame/shared/boardgame-shared.module';

import { PlayListComponent } from './play-list/play-list.component';
import { PlayAddButtonComponent } from './play-add-button/play-add-button.component';
import { PlayInfoComponent } from './play-info/play-info.component';
import { WinnerPipe } from './pipes/winner.pipe';

@NgModule({
  declarations: [
    PlayListComponent,
    PlayAddButtonComponent,
    PlayInfoComponent,
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
