import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Boardgame } from '../shared/model/boardgame.model';

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit {

  @Input() boardgame: Boardgame;

  @Output() backClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit() {
  }

  gotoList() {
    this.backClicked.emit(true);
  }

}
