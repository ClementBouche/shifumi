import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { Score } from '../../model/score.model';
import { PlayerService } from 'src/app/player/shared/services/player.service';
import { PlayerSearch } from 'src/app/player/shared/model/player-seach.model';
import { PlayersPage } from 'src/app/player/shared/model/players-page.model';
import { Player } from 'src/app/player/shared/model/player.model';

@Component({
  selector: 'app-play-score',
  templateUrl: './play-score.component.html',
  styleUrls: ['./play-score.component.css']
})
export class PlayScoreComponent implements OnInit {

  @Input() score: Score;

  player: Player;

  constructor(
    private playerService: PlayerService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.score) {
      const search = new PlayerSearch().deserialize({name: this.score.playerName});
      this.playerService.search(search).then((playersPage: PlayersPage) => {
        this.player = playersPage.result[0];
        this.cd.markForCheck();
      });
    }
  }

}
