import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayComponent } from './play.component';
import { PlayViewComponent } from './play-view/play-view.component';
import { PlayAddComponent } from './play-add/play-add.component';
import { PlayUpdateComponent } from './play-update/play-update.component';
import { PlayListComponent } from './shared/play-list/play-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlayComponent,
    data: {animation: 'playPage'},
    children: [
      {
        path: 'list',
        component: PlayListComponent
      },
      {
        path: 'view/:id',
        component: PlayViewComponent
      },
      {
        path: 'add',
        component: PlayAddComponent
      },
      {
        path: 'add/:boardgameId',
        component: PlayAddComponent
      },
      {
        path: 'update/:playId',
        component: PlayUpdateComponent
      },
      {
        path: '',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
