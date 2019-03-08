import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardgameRoutingModule } from './boardgame-routing.module';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { PlayTimePipe } from './shared/pipes/play-time.pipe';
import { PlayModule } from '../play/play.module';
import { BoardgameSearchComponent } from './boardgame-search/boardgame-search.component';

@NgModule({
  declarations: [
    BoardgameComponent,
    BoardgameListComponent,
    BoardgameViewComponent,
    PlayTimePipe,
    BoardgameSearchComponent
  ],
  imports: [
    CommonModule,
    BoardgameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PlayModule
  ]
})
export class BoardgameModule { }
