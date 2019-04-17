import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';
import { PlayerPaginatedComponent } from './player-paginated/player-paginated.component';

import { PlayerSearchResolverService } from './shared/resolvers/player-search-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    data: { animation: 'playerPage' },
    children: [
      {
        path: '',
        component: PlayerPaginatedComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          playersPage: PlayerSearchResolverService
        },
        data: { animation: 'playerListPage' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
