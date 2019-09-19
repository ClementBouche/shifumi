import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, merge } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { BoardgameService } from '../../boardgame/shared/services/boardgame.service';
import { PlayService } from '../shared/services/play.service';

import { Boardgame } from '../../boardgame/shared/model/boardgame.model';
import { Play } from '../shared/model/play.model';

@Component({
  selector: 'app-play-add',
  templateUrl: './play-add.component.html',
  styleUrls: ['./play-add.component.css']
})
export class PlayAddComponent implements OnInit {

  boardgame: Boardgame;

  play: Play;

  searching: boolean = true;

  constructor(
    private boardgameService: BoardgameService,
    private playService: PlayService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // TODO est-ce propre ????
    merge(
      this.route.params.pipe(
        filter((params) => params.boardgameId),
        switchMap((params) => this.boardgameService.getBoardgame(params.boardgameId)),
      ),
      this.route.params.pipe(
        filter((params) => params.playId),
        switchMap((params) => this.playService.getPlay(params.playId)),
      ),
      this.route.params.pipe(
        filter((params) => !params.playId && !params.boardgameId),
        switchMap(() => of(1)),
      )
    ).subscribe((result) => {
      if (result instanceof Play) {
        this.play = result;
      }
      if (result instanceof Boardgame) {
        this.boardgame = result;
      }
      this.searchEnded();
    });
  }

  savePlay(event: Play) {
    this.playService.create(event).then((play) => {
      this.router.navigate(['/play']);
    });
  }

  private searchEnded() {
    this.searching = false;
    this.cd.markForCheck();
  }

}
