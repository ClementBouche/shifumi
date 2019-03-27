import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBackgroundDirective } from './directives/card-background.directive';

@NgModule({
  declarations: [
    CardBackgroundDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardBackgroundDirective
  ]
})
export class BoardgameSharedModule { }
