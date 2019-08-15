import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './place.component';
import { PlaceHomeComponent } from './place-home/place-home.component';
import { PlaceSearchResolverService } from './shared/resolvers/place-search-resolver.service';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceViewResolverService } from './shared/resolvers/place-view-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PlaceComponent,
    children: [
      {
        path: '',
        component: PlaceHomeComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          placesPage: PlaceSearchResolverService
        },
      },
      {
        path: ':id',
        component: PlaceViewComponent,
        resolve: {
          place: PlaceViewResolverService
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
