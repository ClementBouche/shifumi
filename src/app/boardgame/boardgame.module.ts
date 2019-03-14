import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardgameRoutingModule } from './boardgame-routing.module';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { PlayTimePipe } from './shared/pipes/play-time.pipe';
import { BoardgameSearchComponent } from './boardgame-search/boardgame-search.component';
import { BoardgameInfoComponent } from './boardgame-info/boardgame-info.component';
import { BoardgameSharedModule } from './shared/boardgame-shared.module';
import { PlaySharedModule } from '../play/shared/play-shared.module';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [
    BoardgameComponent,
    BoardgameListComponent,
    BoardgameViewComponent,
    PlayTimePipe,
    BoardgameSearchComponent,
    BoardgameInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoardgameRoutingModule,
    BoardgameSharedModule,
    PlaySharedModule,
    AppMaterialModule
  ],
  exports: [
  ]
})
export class BoardgameModule { }
