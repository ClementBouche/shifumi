import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameTableComponent } from './boardgame-table/boardgame-table.component';
import { BoardgamePaginatedComponent } from './boardgame-paginated/boardgame-paginated.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';

import { BoardgameSearchResolverService } from './shared/resolvers/boardgame-search-resolver.service';
import { BoardgamePreviewResolverService } from './shared/resolvers/boardgame-preview-resolver.service';
import { BoardgameViewResolverService } from './shared/resolvers/boardgame-view-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BoardgameComponent,
    data: { animation: 'boardgamePage' },
    children: [
      {
        path: '',
        // component: BoardgameListComponent,
        component: BoardgamePaginatedComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          result: BoardgameSearchResolverService
        },
        data: { animation: 'boardgameListPage' },
      },
      {
        path: 'preview/:xmlId',
        component: BoardgameViewComponent,
        resolve: {
          boardgame: BoardgamePreviewResolverService
        },
        data: { animation: 'boardgamePreviewPage' }
      },
      {
        path: ':id',
        component: BoardgameViewComponent,
        resolve: {
          boardgame: BoardgameViewResolverService
        },
        data: { animation: 'boardgameViewPage' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardgameRoutingModule { }
