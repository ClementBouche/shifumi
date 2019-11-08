import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlayerListComponent } from './components/player-list/player-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { PlayerChartComponent } from './components/player-chart/player-chart.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { PlayerLibraryComponent } from './components/player-library/player-library.component';
import { BoardgameSharedModule } from 'src/app/boardgame/shared/boardgame-shared.module';
import { PlaySharedModule } from 'src/app/play/shared/play-shared.module';
import { PlayerSmallCardComponent } from './components/player-small-card/player-small-card.component';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerFormComponent,
    PlayerChartComponent,
    PlayerPageComponent,
    PlayerTableComponent,
    PlayerLibraryComponent,
    PlayerSmallCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    BoardgameSharedModule,
    PlaySharedModule,
  ],
  exports: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerFormComponent,
    PlayerChartComponent,
    PlayerPageComponent,
    PlayerTableComponent,
    PlayerLibraryComponent,
  ]
})
export class PlayerSharedModule { }
