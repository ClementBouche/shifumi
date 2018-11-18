import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardgameRoutingModule } from './boardgame-routing.module';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { PlayTimePipe } from './shared/pipes/play-time.pipe';

@NgModule({
  declarations: [
    BoardgameComponent,
    BoardgameListComponent,
    BoardgameViewComponent,
    PlayTimePipe
  ],
  imports: [
    CommonModule,
    BoardgameRoutingModule
  ]
})
export class BoardgameModule { }
