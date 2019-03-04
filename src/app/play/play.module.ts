import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';
import { PlayListComponent } from './play-list/play-list.component';
import { PlayViewComponent } from './play-view/play-view.component';
import { PlayAddComponent } from './play-add/play-add.component';

@NgModule({
  declarations: [
    PlayComponent,
    PlayListComponent,
    PlayViewComponent,
    PlayAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
