import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoardgameSearch } from './shared/model/boardgame-search.model';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doSearch(searchOptions: BoardgameSearch) {
    this.router.navigate(['boardgame'], {queryParams: searchOptions.serialize()});
  }

}
