import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgameListComponent } from './components/boardgame-list/boardgame-list.component';
import { BoardgameCardComponent } from './components/boardgame-card/boardgame-card.component';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BoardgameListComponent,
    BoardgameCardComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule
  ],
  exports: [
    BoardgameListComponent,
    BoardgameCardComponent,
  ]
})
export class BoardgameSharedModule { }
