import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';

import { PlayComponent } from './play.component';
import { PlayViewComponent } from './play-view/play-view.component';
import { PlayAddComponent } from './play-add/play-add.component';
import { PlaySharedModule } from './shared/play-shared.module';

@NgModule({
  declarations: [
    PlayComponent,
    PlayViewComponent,
    PlayAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlayRoutingModule,
    PlaySharedModule,
  ],
  exports: [
  ]
})
export class PlayModule { }
