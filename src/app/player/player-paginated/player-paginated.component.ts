import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';

import { Player } from '../shared/model/player.model';
import { PlayersPage } from '../shared/model/players-page.model';

@Component({
  selector: 'app-player-paginated',
  templateUrl: './player-paginated.component.html',
  styleUrls: ['./player-paginated.component.css']
})
export class PlayerPaginatedComponent implements OnInit {

  players: Player[];

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
    this.routeSubscription = this.route.data.subscribe((data: {playersPage: PlayersPage}) => {
      // mise a jour recherche
      this.count = data.playersPage.count;
      this.index = data.playersPage.page - 1;
      this.size = data.playersPage.size;

      // mise a jour resultat
      this.players = data.playersPage.result;

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
