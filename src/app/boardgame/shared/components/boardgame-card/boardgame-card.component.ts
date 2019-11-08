import { Component, OnInit, Input } from '@angular/core';

import { Boardgame } from '../../model/boardgame.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardgame-card',
  templateUrl: './boardgame-card.component.html',
  styleUrls: ['./boardgame-card.component.css']
})
export class BoardgameCardComponent implements OnInit {

  @Input() boardgame: Boardgame;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo() {
    if (this.boardgame.id) {
      this.router.navigate(['/', 'boardgame', this.boardgame.id]);
    } else {
      this.router.navigate(['/', 'boardgame', 'preview', this.boardgame.xmlId]);
    }
  }

}
