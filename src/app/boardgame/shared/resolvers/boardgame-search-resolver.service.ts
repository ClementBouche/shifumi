import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BoardgameService } from '../services/boardgame.service';
import { BoardgameSearch } from '../model/boardgame-search.model';
import { BoardgamesPage } from '../model/boardgames-page.model';

@Injectable({
  providedIn: 'root'
})
export class BoardgameSearchResolverService implements Resolve<BoardgamesPage> {

  constructor(
    private boardgameService: BoardgameService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<BoardgamesPage> {
    const searchOptions = new BoardgameSearch().deserialize(route.queryParams);
    return this.boardgameService.search(searchOptions)
        .then((boardgamesPage) => boardgamesPage)
        .catch((error) => {
          this.router.navigate(['/']);
          this.snackBar.open('Erreur Réseau', 'Ok', {
            duration: 2000,
          });
          return null;
        });
  }

}
