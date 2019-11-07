import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShifumiEvent } from '../shared/model/shifumi-event.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ShifumiEventPage } from '../shared/model/shifumi-event-page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.css']
})
export class EventHomeComponent implements OnInit {

  index: number;

  size: number;

  count: number;

  shifumiEvents$: Observable<ShifumiEvent[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.shifumiEvents$ = this.route.data.pipe(
      map((data: {page: ShifumiEventPage}) => data.page),
      map(page => {
        this.index = page.index - 1;
        this.size = page.size;
        this.count = page.count;
        console.log(page.result);
        return page.result;
      })
    );

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
