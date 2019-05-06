import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';
import { PlayerPaginatedComponent } from './player-paginated/player-paginated.component';

import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerViewResolverService } from './shared/resolvers/player-view-resolver.service';
import { PlayerListResolverService } from './shared/resolvers/player-list-resolver.service';

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
          players: PlayerListResolverService
        },
        data: { animation: 'playerListPage' },
      },
      {
        path: ':id',
        component: PlayerViewComponent,
        resolve: {
          player: PlayerViewResolverService
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
