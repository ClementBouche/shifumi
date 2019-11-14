import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerSharedModule } from './shared/player-shared.module';

import { PlayerComponent } from './player.component';
import { PlayerPaginatedComponent } from './player-paginated/player-paginated.component';
import { BoardgameSharedModule } from '../boardgame/shared/boardgame-shared.module';
import { PlayerViewComponent } from './player-view/player-view.component';
import { SharedModule } from '../shared/shared.module';
import { PlaySharedModule } from '../play/shared/play-shared.module';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { SharedChartModule } from '../shared-chart/shared-chart.module';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerPaginatedComponent,
    PlayerViewComponent,
    PlayerSearchComponent,
    PlayerHomeComponent,
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
