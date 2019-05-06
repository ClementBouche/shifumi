import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerSharedModule } from './shared/player-shared.module';

import { PlayerComponent } from './player.component';
import { PlayerPaginatedComponent } from './player-paginated/player-paginated.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { BoardgameSharedModule } from '../boardgame/shared/boardgame-shared.module';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerPaginatedComponent,
    PlayerListComponent,
    PlayerInfoComponent,
    PlayerCardComponent,
    PlayerViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    PlayerRoutingModule,
    PlayerSharedModule,
    BoardgameSharedModule
  ],
  exports: [
  ]
})
export class PlayerModule { }
