import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Boardgame } from './shared/model/boardgame.model';
import { BoardgameService } from './shared/services/boardgame.service';
import { BoardgameSearch } from './shared/model/boardgame-search.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  searchedBgs: Boardgame[];

  constructor(
    private boardgameService: BoardgameService,
    private router: Router,
    private location: Location,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  doSearch(searchOptions: BoardgameSearch) {
    this.router.navigate(['boardgame'], {queryParams: searchOptions.serialize()});
  }

}
