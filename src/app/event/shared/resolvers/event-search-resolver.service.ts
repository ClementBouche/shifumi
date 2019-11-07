import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ShifumiEventPage } from '../model/shifumi-event-page';
import { EventService } from '../services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShifumiEventSearch } from '../model/shifumi-event-search.model';

@Injectable({
  providedIn: 'root'
})
export class EventSearchResolverService implements Resolve<ShifumiEventPage> {

  constructor(
    private eventService: EventService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const searchOptions = new ShifumiEventSearch().deserialize(route.queryParams);
    return this.eventService.search(searchOptions)
        .then(page => page)
        .catch((error) => {
          this.router.navigate(['/']);
          this.snackBar.open('Erreur Réseau', 'Ok', {
            duration: 2000,
          });
          return null;
        });
  }

}
