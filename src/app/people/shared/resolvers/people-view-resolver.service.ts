import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BoardgameService } from 'src/app/boardgame/shared/services/boardgame.service';
import { BoardgameSearch } from 'src/app/boardgame/shared/model/boardgame-search.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleViewResolverService implements Resolve<any> {

  constructor(
    private boardgameService: BoardgameService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const name = route.paramMap.get('name');
    const search = new BoardgameSearch();
    search.peopleName = name;
    search.size = 100;
    return this.boardgameService.search(search)
        .then((boardgame) => boardgame)
        .catch((error) => {
          this.router.navigate(['/']);
          return null;
        });
  }

}
