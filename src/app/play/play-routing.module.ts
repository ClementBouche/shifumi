import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayComponent } from './play.component';
import { PlayViewComponent } from './play-view/play-view.component';
import { PlayAddComponent } from './play-add/play-add.component';
import { PlayUpdateComponent } from './play-update/play-update.component';
import { PlayListComponent } from './shared/components/play-list/play-list.component';
import { PlayPaginatedComponent } from './play-paginated/play-paginated.component';
import { PlaySearchResolverService } from './shared/resolvers/play-search-resolver.service';
import { PlayViewResolverService } from './shared/resolvers/play-view-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PlayComponent,
    data: {animation: 'playPage'},
    children: [
      {
        path: '',
        // component: PlayListComponent,
        component: PlayPaginatedComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          playsPage: PlaySearchResolverService
        },
      },
      {
        path: 'add',
        component: PlayAddComponent
      },
      {
        path: ':id',
        component: PlayViewComponent,
        resolve: {
          play: PlayViewResolverService
        },
      },
      {
        path: 'add/:boardgameId',
        component: PlayAddComponent
      },
      {
        path: 'update/:playId',
        component: PlayUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
