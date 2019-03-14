import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { BoardgameSearch } from './shared/model/boardgame-search.model';
import { boardgameRouteAnimations } from '../core/animation/boardgame-route.animation';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css'],
  animations: [boardgameRouteAnimations]
})
export class BoardgameComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doSearch(searchOptions: BoardgameSearch) {
    this.router.navigate(['boardgame'], {queryParams: searchOptions.serialize()});
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
