import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Boardgame } from '../shared/model/boardgame.model';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  @Input() boardgames: Boardgame[];

  @Output() selectBoardgame: EventEmitter<Boardgame> = new EventEmitter<Boardgame>();

  constructor() { }

  ngOnInit() {
  }

  select(boardgame: Boardgame) {
    this.selectBoardgame.emit(boardgame);
  }

}
