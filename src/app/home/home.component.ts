import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MetadataTagsService } from '../core/services/metadata-tags.service';
import { Tagable } from '../core/model/tagable.interface';
import { Router } from '@angular/router';
import { PlayService } from '../play/shared/services/play.service';
import { Play } from '../play/shared/model/play.model';
import { Observable, from } from 'rxjs';
import { Player } from '../player/shared/model/player.model';
import { PlayerService } from '../player/shared/services/player.service';
import { PlaySearch } from '../play/shared/model/play-search.model';
import { map } from 'rxjs/operators';
import { PlaysPage } from '../play/shared/model/plays-page.model';
import { PlayerSearch } from '../player/shared/model/player-seach.model';
import { PlayersPage } from '../player/shared/model/players-page.model';
import { LoginRegisterService } from './shared/services/login-register.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, Tagable {

  plays$: Observable<Play[]>;

  players$: Observable<Player[]>;

  connected: boolean = false;

  constructor(
    private playService: PlayService,
    private playerService: PlayerService,
    private loginRegisterService: LoginRegisterService,
    private metadataTags: MetadataTagsService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('home oucou');
    this.connected = this.loginRegisterService.isConnect();

    {
      const search = new PlaySearch();
      search.size = 3;
      this.plays$ = from(this.playService.search(search)).pipe(
        map((page: PlaysPage) => page.result)
      );
    }

    {
      const search = new PlayerSearch();
      search.size = 3;
      search.minPlay = 20;
      search.order = 'play';
      this.players$ = from(this.playerService.search(search)).pipe(
        map((page: PlayersPage) => page.result)
      );
    }

    this.updateTags();
  }

  go(page: string) {
    if (page === 'boardgame' ||
        page === 'player' ||
        page === 'place' ||
        page === 'play'
    ) {
      this.router.navigate(['/', page]);
    }
    if (page === 'myPlay') {
      this.router.navigate(['/', 'play', 'me']);
    }
  }

  updateTags() {
    this.metadataTags.updateTitle('Shifumi - Accueil');
  }

}
