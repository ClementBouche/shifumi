import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardgameRoutingModule } from './boardgame-routing.module';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { BoardgameSearchComponent } from './boardgame-search/boardgame-search.component';
import { BoardgameSharedModule } from './shared/boardgame-shared.module';
import { PlaySharedModule } from '../play/shared/play-shared.module';
import { BoardgamePaginatedComponent } from './boardgame-paginated/boardgame-paginated.component';
import { SharedModule } from '../shared/shared.module';
import { BoardgameHomeComponent } from './boardgame-home/boardgame-home.component';
import { BoardgameFilterComponent } from './boardgame-filter/boardgame-filter.component';
import { BoardgameTableComponent } from './boardgame-table/boardgame-table.component';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [
    BoardgameComponent,
    BoardgameViewComponent,
    BoardgameSearchComponent,
    BoardgamePaginatedComponent,
    BoardgameHomeComponent,
    BoardgameFilterComponent,
    BoardgameTableComponent,
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
