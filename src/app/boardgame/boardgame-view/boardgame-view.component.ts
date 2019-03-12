import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Boardgame } from '../shared/model/boardgame.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit {

  boardgame: Boardgame;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {boardgame: Boardgame}) => {
      this.boardgame = data.boardgame;
    });
  }

  gotoList() {
    this.location.back();
  }

}
