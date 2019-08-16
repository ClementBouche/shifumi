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
import { BoardgamePaginatedComponent } from './boardgame-paginated/boardgame-paginated.component';
import { SharedModule } from '../shared/shared.module';
import { ChartSharedModule } from '../chart-shared/chart-shared.module';
import { BoardgameHomeComponent } from './boardgame-home/boardgame-home.component';
import { BoardgameFilterComponent } from './boardgame-filter/boardgame-filter.component';

@NgModule({
  declarations: [
    BoardgameComponent,
    BoardgameViewComponent,
    BoardgameSearchComponent,
    BoardgameInfoComponent,
    BoardgamePaginatedComponent,
    BoardgameHomeComponent,
    BoardgameFilterComponent,
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
    ChartSharedModule
  ],
  exports: [
  ]
})
export class BoardgameModule { }
