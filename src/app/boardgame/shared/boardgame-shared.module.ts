import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgameListComponent } from './components/boardgame-list/boardgame-list.component';
import { BoardgameCardComponent } from './components/boardgame-card/boardgame-card.component';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BoardgameNoteDirective } from './directives/boardgame-note.directive';
import { BoardgameRateComponent } from './components/boardgame-rate/boardgame-rate.component';

@NgModule({
  declarations: [
    BoardgameListComponent,
    BoardgameCardComponent,
    BoardgameNoteDirective,
    BoardgameRateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    SharedModule
  ],
  exports: [
    BoardgameListComponent,
    BoardgameCardComponent,
    BoardgameNoteDirective,
    BoardgameRateComponent,
  ]
})
export class BoardgameSharedModule { }
