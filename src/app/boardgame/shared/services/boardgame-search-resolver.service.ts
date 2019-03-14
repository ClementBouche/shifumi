import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BoardgameService } from './boardgame.service';
import { Boardgame } from '../model/boardgame.model';
import { BoardgameSearch } from '../model/boardgame-search.model';

@Injectable({
  providedIn: 'root'
})
export class BoardgameSearchResolverService implements Resolve<Boardgame[]> {

  constructor(
    private boardgameService: BoardgameService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Boardgame[]> {
    const searchOptions = new BoardgameSearch().deserialize(route.queryParams);
    return this.boardgameService.search(searchOptions)
        .then((boardgames) => boardgames)
        .catch((error) => {
          this.router.navigate(['boardgame']);
          return null;
        });
  }

}
