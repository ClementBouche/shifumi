import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Player } from '../../model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { User } from 'src/app/user/shared/model/user.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { PlayService } from 'src/app/play/shared/services/play.service';
import { UserService } from 'src/app/user/shared/services/user.service';
import { PlaySearch } from 'src/app/play/shared/model/play-search.model';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  @Input() player: Player;

  plays: Play[];

  allPlays$: Observable<Play[]>;

  user: User;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private playService: PlayService,
    private userService: UserService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();

    if (!this.player) {
      return;
    }

    const search = new PlaySearch().deserialize({ player: this.player.name, size: 6 });
    this.playService.search(search).then((page) => {
      this.plays = page.result;
      this.cd.markForCheck();
    });

    // all plays are retrieve for statistics
    this.allPlays$ = from(this.playService.allPlayerPlays(this.player)).pipe(
      map((page) => page.result)
    );

  }

  actionSynch() {
    this.userService.claimPlayer(this.player.id).subscribe();
  }

  goPlays() {
    this.router.navigate(['/', 'play'], {
      queryParams: {
        player: this.player.name
      }
    });
  }

}
