import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgameService } from '../shared/services/boardgame.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoardgameSearch } from '../shared/model/boardgame-search.model';

@Component({
  selector: 'app-boardgame-paginated',
  templateUrl: './boardgame-paginated.component.html',
  styleUrls: ['./boardgame-paginated.component.css']
})
export class BoardgamePaginatedComponent implements OnInit, OnDestroy {

  boardgames: Boardgame[];

  boardgameSearch: BoardgameSearch;

  private routeSubscription: Subscription;

  constructor(
    private boardgameService: BoardgameService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.data.subscribe((data: {result: {search:  BoardgameSearch, boardgames: Boardgame[]}}) => {
      this.boardgameSearch = data.result.search;
      this.boardgames = data.result.boardgames;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  changePage(pageEvent: PageEvent) {
    this.boardgameSearch.page = pageEvent.pageIndex;
    this.boardgameSearch.size = pageEvent.pageSize;
    this.boardgameService.search(this.boardgameSearch)
        .then(result => {
          this.boardgames = result;
          this.cd.detectChanges();
        });
  }

}
