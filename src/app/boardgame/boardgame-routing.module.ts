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
    children: [
      {
        path: '',
        component: BoardgameListComponent,
        resolve: {
          boardgames: BoardgameSearchResolverService
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      },
      {
        path: ':id',
        component: BoardgameViewComponent,
        resolve: {
          boardgame: BoardgameViewResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardgameRoutingModule { }
