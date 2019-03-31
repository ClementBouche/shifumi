import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Boardgame } from '../../boardgame/shared/model/boardgame.model';
import { BoardgameService } from '../../boardgame/shared/services/boardgame.service';

@Component({
  selector: 'app-play-add',
  templateUrl: './play-add.component.html',
  styleUrls: ['./play-add.component.css']
})
export class PlayAddComponent implements OnInit {

  boardgame: Boardgame;

  searching: boolean = true;

  constructor(
    private boardgameService: BoardgameService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.boardgameId) {
        return this.boardgameService.getBoardgame(params.boardgameId).then((bg) => {
          this.boardgame = bg;
          this.searchEnded();
        })
      } else {
        this.searchEnded();
      }
    });
  }

  private searchEnded() {
    this.searching = false;
    this.cd.detectChanges();
  }

}
