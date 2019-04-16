import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PlaySearch } from '../shared/model/play-search.model';
import { Play } from '../shared/model/play.model';
import { PlayService } from '../shared/services/play.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-play-paginated',
  templateUrl: './play-paginated.component.html',
  styleUrls: ['./play-paginated.component.css']
})
export class PlayPaginatedComponent implements OnInit, OnDestroy {

  plays: Play[];

  playSearch: PlaySearch;

  private routeSubscription: Subscription;

  constructor(
    private playService: PlayService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.data.subscribe((data: {result: {search:  PlaySearch, plays: Play[]}}) => {
      this.playSearch = data.result.search;
      this.plays = data.result.plays;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  changePage(pageEvent: PageEvent) {
    this.playSearch.page = pageEvent.pageIndex;
    this.playSearch.size = pageEvent.pageSize;
    this.playService.search(this.playSearch)
        .then(result => {
          this.plays = result;
          this.cd.detectChanges();
        });
  }

}
