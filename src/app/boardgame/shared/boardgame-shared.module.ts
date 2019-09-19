import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgameListComponent } from './components/boardgame-list/boardgame-list.component';
import { BoardgameCardComponent } from './components/boardgame-card/boardgame-card.component';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LibraryToolComponent } from './components/library-tool/library-tool.component';

@NgModule({
  declarations: [
    BoardgameListComponent,
    BoardgameCardComponent,
    LibraryToolComponent,
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
    LibraryToolComponent,
  ]
})
export class BoardgameSharedModule { }
