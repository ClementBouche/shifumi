import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';

const routes: Routes = [
  {
    path: '',
    component: BoardgameComponent,
    // children: [
    //   {
    //     path: 'list',
    //     component: BoardgameListComponent
    //   },
    //   {
    //     path: 'view/:id',
    //     component: BoardgameViewComponent
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'list'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardgameRoutingModule { }
