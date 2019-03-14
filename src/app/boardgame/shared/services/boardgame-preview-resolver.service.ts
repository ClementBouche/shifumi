import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BoardgameService } from './boardgame.service';
import { Boardgame } from '../model/boardgame.model';

@Injectable({
  providedIn: 'root'
})
export class BoardgamePreviewResolverService implements Resolve<Boardgame> {

  constructor(
    private boardgameService: BoardgameService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Boardgame> {
    const xmlId = route.paramMap.get('xmlId');
    return this.boardgameService.getPreview(xmlId)
        .then((boardgame) => Object.assign(boardgame, { preview: true }))
        .catch(() => {
          this.router.navigate(['boardgame']);
          return null;
        });
  }

}
