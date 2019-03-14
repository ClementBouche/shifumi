import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { BoardgameViewResolverService } from './shared/services/boardgame-view-resolver.service';
import { BoardgameSearchResolverService } from './shared/services/boardgame-search-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BoardgameComponent,
    data: {animation: 'boardgamePage'},
    children: [
      {
        path: '',
        component: BoardgameListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          boardgames: BoardgameSearchResolverService
        },
        data: {animation: 'boardgameListPage'},
      },
      {
        path: ':id',
        component: BoardgameViewComponent,
        resolve: {
          boardgame: BoardgameViewResolverService
        },
        data: {animation: 'boardgameViewPage'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardgameRoutingModule { }
