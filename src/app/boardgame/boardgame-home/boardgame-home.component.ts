import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoardgamesPage } from '../shared/model/boardgames-page.model';
import { map } from 'rxjs/operators';
import { BoardgameSearch } from '../shared/model/boardgame-search.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-boardgame-home',
  templateUrl: './boardgame-home.component.html',
  styleUrls: ['./boardgame-home.component.css']
})
export class BoardgameHomeComponent implements OnInit {

  boardgamePage$: Observable<BoardgamesPage>;

  search: BoardgameSearch;

  orderSelected: any;

  orderOptions = [{
    value: 'rank',
    order: -1,
    viewValue: 'par Note décroissante',
    selected: true
  }];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.orderSelected = this.orderOptions[0];

    this.boardgamePage$ = this.route.data.pipe(
      map((data: {boardgamesPage: BoardgamesPage}) => data.boardgamesPage)
    );

    this.route.queryParams.pipe(
      map((params) => new BoardgameSearch().deserialize(params)),
      map((search) => this.search = search)
    ).subscribe();
  }

  changed(event: any) {
    this.doSearch();
  }

  setOrderBy(value: any) {
    this.search.orderBy = value.value;
    this.search.order = value.order;

    this.doSearch();
  }

  setExtended() {
    this.search.extended = !this.search.extended;

    this.doSearch();
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

  private doSearch() {
    this.router.navigate(['boardgame'], {queryParams: this.search.serialize()});
  }

}
