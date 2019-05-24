import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardgameRoutingModule } from './boardgame-routing.module';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { BoardgameSearchComponent } from './boardgame-search/boardgame-search.component';
import { BoardgameInfoComponent } from './boardgame-info/boardgame-info.component';
import { BoardgameSharedModule } from './shared/boardgame-shared.module';
import { PlaySharedModule } from '../play/shared/play-shared.module';
import { AppMaterialModule } from '../shared/app-material.module';
import { BoardgameTableComponent } from './boardgame-table/boardgame-table.component';
import { BoardgamePaginatedComponent } from './boardgame-paginated/boardgame-paginated.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BoardgameComponent,
    BoardgameViewComponent,
    BoardgameSearchComponent,
    BoardgameInfoComponent,
    BoardgameTableComponent,
    BoardgamePaginatedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    BoardgameRoutingModule,
    BoardgameSharedModule,
    PlaySharedModule,
  ],
  exports: [
  ]
})
export class BoardgameModule { }
