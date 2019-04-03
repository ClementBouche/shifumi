import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

import { Boardgame } from '../shared/model/boardgame.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  @Input() boardgames: Boardgame[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // this.route.data.subscribe((data: {boardgames: Boardgame[]}) => {
    //   this.boardgames = data.boardgames;
    //   this.cd.markForCheck();
    // });
  }

  select(boardgame: Boardgame) {
    if (boardgame.id) {
      this.router.navigate(['boardgame', boardgame.id]);
    } else {
      this.router.navigate(['boardgame', 'preview', boardgame.xmlId])
    }
  }

}
