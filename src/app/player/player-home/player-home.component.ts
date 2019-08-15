import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';

import { PlayersPage } from '../shared/model/players-page.model';
import { PlayerSearch } from '../shared/model/player-seach.model';

import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { Player } from '../shared/model/player.model';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit, Tagable {

  players: Player[];

  count: number;

  index: number;

  size: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metadataTags: MetadataTagsService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      // get page from resolver
      map((data: { playersPage: PlayersPage }) => {
        // mise a jour recherche
        this.count = data.playersPage.count;
        this.index = data.playersPage.page - 1;
        this.size = data.playersPage.size;

        // mise a jour resultat
        this.players = data.playersPage.result;

        this.cd.markForCheck();
      })
    ).subscribe();

    this.updateTags();
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Les joueurs');
  }

  doSearch(search: PlayerSearch) {
    // router update
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: search.page,
        size: search.size,
        name: search.name,
        order: search.order,
        minPlay: search.minPlay
      },
      queryParamsHandling: 'merge'
    });
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
