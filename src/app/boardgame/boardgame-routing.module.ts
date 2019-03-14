import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardgameComponent } from './boardgame.component';
import { BoardgameListComponent } from './boardgame-list/boardgame-list.component';
import { BoardgameViewComponent } from './boardgame-view/boardgame-view.component';
import { BoardgameViewResolverService } from './shared/services/boardgame-view-resolver.service';
import { BoardgameSearchResolverService } from './shared/services/boardgame-search-resolver.service';
import { BoardgameAddComponent } from './boardgame-add/boardgame-add.component';
import { BoardgamePreviewResolverService } from './shared/services/boardgame-preview-resolver.service';

const routes: Routes = [
  {
    path: 'add',
    component: BoardgameAddComponent,
    data: { animation: 'boardgameAddPage' }
  },
  {
    path: '',
    component: BoardgameComponent,
    data: { animation: 'boardgamePage' },
    children: [
      {
        path: '',
        component: BoardgameListComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          boardgames: BoardgameSearchResolverService
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
