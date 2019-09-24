import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerInfoComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
  ],
  exports: [
    PlayerListComponent,
    PlayerCardComponent,
    PlayerInfoComponent,
  ]
})
export class PlayerSharedModule { }
