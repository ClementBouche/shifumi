import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerSharedModule } from './shared/player-shared.module';

import { PlayerComponent } from './player.component';
import { PlayerPaginatedComponent } from './player-paginated/player-paginated.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { BoardgameSharedModule } from '../boardgame/shared/boardgame-shared.module';
import { PlayerViewComponent } from './player-view/player-view.component';
import { SharedModule } from '../shared/shared.module';
import { PlaySharedModule } from '../play/shared/play-shared.module';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerChartComponent } from './player-chart/player-chart.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { SharedChartModule } from '../shared-chart/shared-chart.module';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerPaginatedComponent,
    PlayerInfoComponent,
    PlayerViewComponent,
    PlayerSearchComponent,
    PlayerHomeComponent,
    PlayerChartComponent,
    PlayerTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    PlayerRoutingModule,
    PlayerSharedModule,
    PlaySharedModule,
    BoardgameSharedModule,
    SharedChartModule
  ],
  exports: [
  ]
})
export class PlayerModule { }
