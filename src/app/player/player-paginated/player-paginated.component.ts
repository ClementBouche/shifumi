import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Player } from '../shared/model/player.model';
import { PlayersPage } from '../shared/model/players-page.model';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';

@Component({
  selector: 'app-player-paginated',
  templateUrl: './player-paginated.component.html',
  styleUrls: ['./player-paginated.component.css']
})
export class PlayerPaginatedComponent implements OnInit, Tagable {

  players: Player[];

  count: number;

  index: number;

  size: number;

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private metadataTags: MetadataTagsService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.index = data.page ? data.page - 1 : 0;
      this.size = data.size || 10;
      this.cd.markForCheck();
    });

    this.routeSubscription = this.route.data.subscribe((data: {players: Player[]}) => {
      // mise a jour resultat
      this.players = data.players;
      this.count = this.autoSizingPaginator(this.players, this.index, this.size, this.count);

      this.cd.markForCheck();
    });

    this.updateTags();
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

  autoSizingPaginator(data: any[], page: number, size: number, oldCount: number) {
    const noMoreDataCount = (page + 1) * size;
    const moreDataCount = (page + 2) * size;
    if (oldCount === null || oldCount === 0 || data.length === 0) {
      return noMoreDataCount;
    }
    // keep old count or upgrade him
    return oldCount > moreDataCount ? oldCount : moreDataCount;
  }

  view(id: string) {
    this.router.navigate(['/', 'player', id]);
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Liste des joueurs');
  }

}
