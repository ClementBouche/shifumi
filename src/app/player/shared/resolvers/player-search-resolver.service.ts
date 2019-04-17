import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { PlayerService } from '../services/player.service';
import { PlayerSearch } from '../model/player-seach.model';
import { PlayersPage } from '../model/players-page.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerSearchResolverService implements Resolve<PlayersPage> {

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const searchOptions = new PlayerSearch().deserialize(route.queryParams);
    return this.playerService.search(searchOptions)
        .then(playersPage => playersPage)
        .catch((error) => {
          this.router.navigate(['/']);
          this.snackBar.open("Erreur Réseau", "Ok", {
            duration: 2000,
          });
          return null;
        });
  }

}
