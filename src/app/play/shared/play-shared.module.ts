import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './play-list/play-list.component';


@NgModule({
  declarations: [
    PlayListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PlayListComponent
  ]
})
export class PlaySharedModule { }
