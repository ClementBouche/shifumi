import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgamesPage } from '../shared/model/boardgames-page.model';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';

@Component({
  selector: 'app-boardgame-paginated',
  templateUrl: './boardgame-paginated.component.html',
  styleUrls: ['./boardgame-paginated.component.css']
})
export class BoardgamePaginatedComponent implements OnInit, OnDestroy, Tagable {

  boardgames: Boardgame[];

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
    this.routeSubscription = this.route.data.subscribe((data: {boardgamesPage: BoardgamesPage}) => {
      // mise a jour recherche
      this.count = data.boardgamesPage.count;
      this.index = data.boardgamesPage.page - 1;
      this.size = data.boardgamesPage.size;

      // mise a jour resultat
      this.boardgames = data.boardgamesPage.result;

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

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Liste des jeux');
  }

}
