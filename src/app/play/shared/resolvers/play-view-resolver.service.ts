import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Play } from '../model/play.model';
import { PlayService } from '../services/play.service';

@Injectable({
  providedIn: 'root'
})
export class PlayViewResolverService implements Resolve<Play> {

  constructor(
    private service: PlayService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Play> {
    const id = route.paramMap.get('id');
    return this.service.getPlay(id)
        .then((play) => play)
        .catch(() => {
          this.router.navigate(['play']);
          return null;
        });
  }
}
