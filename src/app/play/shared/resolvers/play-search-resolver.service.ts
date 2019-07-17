import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayService } from '../services/play.service';
import { PlaySearch } from '../model/play-search.model';
import { PlaysPage } from '../model/plays-page.model';

@Injectable({
  providedIn: 'root'
})
export class PlaySearchResolverService implements Resolve<PlaysPage> {

  constructor(
    private playService: PlayService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const searchOptions = new PlaySearch().deserialize(route.queryParams);
    if (route.queryParams.size) {
      // all is ok
    } else {
      searchOptions.size = 100;
    }
    return this.playService.search(searchOptions)
        .then((playsPage) => playsPage)
        .catch((error) => {
          this.router.navigate(['/']);
          this.snackBar.open("Erreur Réseau", "Ok", {
            duration: 2000,
          });
          return null;
        });
  }

}
