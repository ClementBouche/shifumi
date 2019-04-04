import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BoardgameService } from '../services/boardgame.service';
import { Boardgame } from '../model/boardgame.model';

@Injectable({
  providedIn: 'root'
})
export class BoardgameViewResolverService implements Resolve<Boardgame> {

  constructor(
    private boardgameService: BoardgameService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Boardgame> {
    const id = route.paramMap.get('id');
    return this.boardgameService.getBoardgame(id)
        .then((boardgame) => boardgame)
        .catch(() => {
          this.router.navigate(['boardgame']);
          return null;
        });
  }

}
