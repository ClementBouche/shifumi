import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Player } from '../model/player.model';
import { PlayerService } from '../services/player.service';
import { PlayerSearch } from '../model/player-seach.model';
import { PlayersPage } from '../model/players-page.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerViewResolverService implements Resolve<Player> {

  constructor(
    private service: PlayerService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Player> {
    const id = route.paramMap.get('id');
    return this.service.getPlayer(id)
        .then((play) => play)
        .catch((error) => {
          if (error.status === 404) {
            const searchPlayer = new PlayerSearch();
            searchPlayer.name = id;
            // TODO something better
            return this.service.search(searchPlayer).then((playersPage: PlayersPage) => {
              if (playersPage.count > 0) {
                const realId = playersPage.result[0].id;
                this.router.navigate(['player', realId]);
              } else {
                this.router.navigate(['player']);
              }
              return null;
            });
          } else {
            this.router.navigate(['player']);
          }
          return null;
        });
  }
}
