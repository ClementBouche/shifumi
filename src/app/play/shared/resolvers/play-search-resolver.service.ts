import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { PlayService } from '../services/play.service';
import { PlaySearch } from '../model/play-search.model';

@Injectable({
  providedIn: 'root'
})
export class PlaySearchResolverService implements Resolve<any> {

  constructor(
    private playService: PlayService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const searchOptions = new PlaySearch().deserialize(route.queryParams);
    return this.playService.search(searchOptions)
        .then((plays) => {
          return {
            plays: plays,
            search: searchOptions
          };
        })
        .catch((error) => {
          this.router.navigate(['boardgame']);
          return null;
        });
  }
}
