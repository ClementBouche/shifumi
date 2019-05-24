import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { BoardgameSharedModule } from '../boardgame/shared/boardgame-shared.module';

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleCardComponent,
    PeopleViewComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule,
    BoardgameSharedModule
  ]
})
export class PeopleModule { }
