import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { Play } from '../shared/model/play.model';
import { PageEvent } from '@angular/material/paginator';
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

  dates: String[];

  count: number;

  index: number;

  size: number;

  actions: string[] = ['add'];

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

      this.dates = this.parseDates(this.plays);

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

  nextPage() {
    // router update
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 
        page: this.index + 2,
      },
      queryParamsHandling: 'merge'
    });
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Liste des parties');
  }

  doAction(actionName: string) {
    if (actionName == 'add') {
      this.router.navigate(['/', 'play', 'add']);
    }
  }

  dateSelection(date: string) {
  }

  private parseDates(plays: Play[]) {
    const dates = plays.reduce((currentValue, play) => {
      const date = moment(play.date, 'YYYY-MM-DD').format('YYYY-MM');

      if (currentValue.length == 0) {
        currentValue.push(date);
        return currentValue;
      }

      const index = currentValue.findIndex((d) => d === date);
      if (index === -1) {
        currentValue.push(date);
      }

      return currentValue;
    }, []);

    return dates;
  }

}
