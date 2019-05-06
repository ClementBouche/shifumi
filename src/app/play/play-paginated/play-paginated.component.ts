import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Play } from '../shared/model/play.model';
import { PageEvent } from '@angular/material';
import { PlaysPage } from '../shared/model/plays-page.model';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';

@Component({
  selector: 'app-play-paginated',
  templateUrl: './play-paginated.component.html',
  styleUrls: ['./play-paginated.component.css']
})
export class PlayPaginatedComponent implements OnInit, OnDestroy, Tagable {

  plays: Play[];

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
    this.routeSubscription = this.route.data.subscribe((data: {playsPage: PlaysPage}) => {
      // mise a jour recherche
      this.count = data.playsPage.count;
      this.index = data.playsPage.page - 1;
      this.size = data.playsPage.size;

      this.plays = data.playsPage.result;
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
    this.metadataTags.updateTitle('Shifumi - Liste des parties');
  }

}
