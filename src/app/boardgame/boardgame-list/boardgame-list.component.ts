import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgameService } from '../shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  boardgames: Boardgame[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.boardgameService.getBoardgames(10, 1).then((result) => {
      // get 10 first
      this.boardgames = result;
      this.cd.markForCheck();
    });
  }

  view(boardgameid: string) {
    // this.router.navigate(['boardgame', 'view', boardgameid], { relativeTo: this.route });
    this.router.navigate(['boardgame', 'view', boardgameid]);
  }

}
