import { Component, OnInit, Input } from '@angular/core';
import { Boardgame } from '../shared/model/boardgame.model';

@Component({
  selector: 'app-boardgame-info',
  templateUrl: './boardgame-info.component.html',
  styleUrls: ['./boardgame-info.component.css']
})
export class BoardgameInfoComponent implements OnInit {

  @Input() boardgame: Boardgame;

  @Input() listItem: boolean = false;

  constructor() { }

  ngOnInit() {
    // console.log({boardgame: this.boardgame});
  }

}
