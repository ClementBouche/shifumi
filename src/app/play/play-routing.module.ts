import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayComponent } from './play.component';
import { PlayListComponent } from './play-list/play-list.component';
import { PlayViewComponent } from './play-view/play-view.component';

const routes: Routes = [
  {
    path: '',
    component: PlayComponent,
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
