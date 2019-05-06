import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { MatSnackBar } from '@angular/material';
import { Player } from '../model/player.model';
import { PlayerSearch } from '../model/player-seach.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerListResolverService implements Resolve<Player[]> {

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const searchOptions = new PlayerSearch().deserialize(route.queryParams);
    return this.playerService.getPlayers(searchOptions.size, searchOptions.page)
        .then(players => players)
        .catch((error) => {
          this.router.navigate(['/']);
          this.snackBar.open("Erreur Réseau", "Ok", {
            duration: 2000,
          });
          return null;
        });
  }

}
