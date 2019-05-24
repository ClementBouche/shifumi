import { Component, OnInit, Input } from '@angular/core';
import { Boardgame } from '../../model/boardgame.model';

@Component({
  selector: 'app-boardgame-card',
  templateUrl: './boardgame-card.component.html',
  styleUrls: ['./boardgame-card.component.css']
})
export class BoardgameCardComponent implements OnInit {

  @Input() boardgame: Boardgame;

  constructor() { }

  ngOnInit() {
  }

}
