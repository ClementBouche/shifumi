import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventSearchResolverService } from './shared/resolvers/event-search-resolver.service';
import { EventFormComponent } from './event-form/event-form.component';

const routes: Routes = [
    {
      path: '',
      component: EventComponent,
      children: [
        {
          path: '',
          component: EventHomeComponent,
          runGuardsAndResolvers: 'always',
          resolve: {
            page: EventSearchResolverService
          },
        },
        {
          path: 'add',
          component: EventFormComponent,
        },
        {
          path: 'update/:id',
          component: EventFormComponent,
        },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventRoutingModule { }
