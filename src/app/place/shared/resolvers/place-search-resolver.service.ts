import { Injectable } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { PlacesPage } from '../model/places-page.model';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceSearch } from '../model/place-search.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceSearchResolverService implements Resolve<PlacesPage> {

  constructor(
    private placeService: PlaceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PlacesPage> {
    const searchOptions = new PlaceSearch().deserialize(route.queryParams);
    return this.placeService.search(searchOptions)
        .then((page) => page)
        .catch((error) => {
          this.router.navigate(['/']);
          this.snackBar.open('Erreur Réseau', 'Ok', {
            duration: 2000,
          });
          return null;
        });
  }

}
