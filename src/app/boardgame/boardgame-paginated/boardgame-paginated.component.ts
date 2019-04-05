import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';

import { Boardgame } from '../shared/model/boardgame.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoardgamesPage } from '../shared/model/boardgames-page.model';

@Component({
  selector: 'app-boardgame-paginated',
  templateUrl: './boardgame-paginated.component.html',
  styleUrls: ['./boardgame-paginated.component.css']
})
export class BoardgamePaginatedComponent implements OnInit, OnDestroy {

  boardgames: Boardgame[];

  count: number;

  index: number;

  size: number;

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.data.subscribe((data: {boardgamesPage: BoardgamesPage}) => {
      // mise a jour recherche
      this.count = data.boardgamesPage.count;
      this.index = data.boardgamesPage.page - 1;
      this.size = data.boardgamesPage.size;

      // mise a jour resultat
      this.boardgames = data.boardgamesPage.result;

      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  changePage(pageEvent: PageEvent) {
    // router update
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 
        page: pageEvent.pageIndex + 1,
        size: pageEvent.pageSize
      },
      queryParamsHandling: 'merge'
    });
  }

}
