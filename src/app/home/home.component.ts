import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tagable } from '../core/model/tagable.interface';
import { MetadataTagsService } from '../core/services/metadata-tags.service';

import { LoginRegisterService } from './shared/services/login-register.service';
import { PlayService } from '../play/shared/services/play.service';
import { PlayerService } from '../player/shared/services/player.service';
import { BoardgameService } from '../boardgame/shared/services/boardgame.service';

import { Boardgame } from '../boardgame/shared/model/boardgame.model';
import { BoardgameSearch } from '../boardgame/shared/model/boardgame-search.model';
import { Play } from '../play/shared/model/play.model';
import { PlaySearch } from '../play/shared/model/play-search.model';
import { Player } from '../player/shared/model/player.model';
import { PlayerSearch } from '../player/shared/model/player-seach.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, Tagable {

  plays$: Observable<Play[]>;

  players$: Observable<Player[]>;

  boardgames$: Observable<Boardgame[]>;

  connected: boolean = false;

  constructor(
    private playService: PlayService,
    private playerService: PlayerService,
    private boardgameService: BoardgameService,
    private loginRegisterService: LoginRegisterService,
    private metadataTags: MetadataTagsService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.connected = this.loginRegisterService.isConnect();

    {
      const search = new PlaySearch();
      search.size = 3;
      this.plays$ = from(this.playService.search(search)).pipe(
        map((page) => page.result)
      );
    }

    {
      const search = new PlayerSearch();
      search.size = 3;
      search.minPlay = 20;
      search.order = 'play';
      this.players$ = from(this.playerService.search(search)).pipe(
        map((page) => page.result)
      );
    }

    {
      const search = new BoardgameSearch();
      search.size = 3;
      this.boardgames$ = from(this.boardgameService.search(search)).pipe(
        map((page) => page.result)
      );
    }

    this.updateTags();
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Accueil');
  }

}
