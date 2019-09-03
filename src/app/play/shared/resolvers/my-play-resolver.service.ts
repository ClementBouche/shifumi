import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayService } from '../services/play.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

import { PlaysPage } from '../model/plays-page.model';
import { PlaySearch } from '../model/play-search.model';

@Injectable({
  providedIn: 'root'
})
export class MyPlayResolverService implements Resolve<PlaysPage> {

  constructor(
    private playService: PlayService,
    private snackBar: MatSnackBar,
    private loginRegisterService: LoginRegisterService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const searchOptions = new PlaySearch();
    searchOptions.playerName = this.loginRegisterService.getUser().username;
    if (route.queryParams.size) {
      // all is ok
    } else {
      searchOptions.size = 50;
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
