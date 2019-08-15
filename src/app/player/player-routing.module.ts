import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';

import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerViewResolverService } from './shared/resolvers/player-view-resolver.service';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerSearchResolverService } from './shared/resolvers/player-search-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    data: { animation: 'playerPage' },
    children: [
      {
        path: '',
        component: PlayerHomeComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          playersPage: PlayerSearchResolverService
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
