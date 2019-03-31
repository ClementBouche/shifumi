import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBackgroundDirective } from './directives/card-background.directive';
import { PlayTimePipe } from './pipes/play-time.pipe';

@NgModule({
  declarations: [
    CardBackgroundDirective,
    PlayTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardBackgroundDirective,
    PlayTimePipe
  ]
})
export class BoardgameSharedModule { }
