import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Player } from '../model/player.model';
import { PlayerService } from '../services/player.service';

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
        .catch(() => {
          this.router.navigate(['player']);
          return null;
        });
  }
}
