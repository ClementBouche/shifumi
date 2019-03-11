import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Boardgame } from './shared/model/boardgame.model';
import { BoardgameService } from './shared/services/boardgame.service';
import { BoardgameSearch } from './shared/model/boardgame-search.model';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  detail: boolean = false;
  
  searchedBgs: Boardgame[];

  selectedBg: Boardgame;

  constructor(
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  doSearch(searchOptions: BoardgameSearch) {
    this.boardgameService.search(searchOptions)
        .then((results) => {
          this.searchedBgs = results;
          console.log({nb: results.length, searchOptions, results});
          this.cd.markForCheck();
        });
  }

  viewDetail(boardgame: Boardgame) {
    this.detail = true;
    this.selectedBg = boardgame;
  }

  goToList() {
    this.detail = false;
  }

}
