import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { Routes, RouterModule } from '@angular/router';
import { PeopleViewComponent } from './people-view/people-view.component';
import { PeopleViewResolverService } from './shared/resolvers/people-view-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      {
        path: ':name',
        component: PeopleViewComponent,
        resolve: {
          page: PeopleViewResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
