import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BoardgameService } from '../services/boardgame.service';
import { BoardgameSearch } from '../model/boardgame-search.model';

@Injectable({
  providedIn: 'root'
})
export class BoardgameSearchResolverService implements Resolve<any> {

  constructor(
    private boardgameService: BoardgameService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const searchOptions = new BoardgameSearch().deserialize(route.queryParams);
    return this.boardgameService.search(searchOptions)
        .then((boardgames) => {
          return {
            boardgames: boardgames,
            search: searchOptions
          };
        })
        .catch((error) => {
          this.router.navigate(['boardgame']);
          return null;
        });
  }

}
