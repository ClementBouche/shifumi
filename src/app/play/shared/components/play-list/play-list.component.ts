import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';

import { Play } from '../../model/play.model';
import { PlayService } from '../../services/play.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  @Input() boardgame: Boardgame;

  @Input() plays: Play[];

  constructor(
    private router: Router,
    private playService: PlayService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // if input
    if (this.boardgame) {
      this.playService.getBoardgamePlays(this.boardgame).then((result) => {
        this.plays = result;
        this.cd.markForCheck();
      });
    } else {
      // ras
    }
  }

  view(playid: string) {
    this.router.navigate(['play', playid]);
  }

}
