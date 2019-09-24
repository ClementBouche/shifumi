import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

import { Player } from '../../model/player.model';

import { PlayerService } from '../../services/player.service';
import { UserService } from 'src/app/user/shared/services/user.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { User } from 'src/app/user/shared/model/user.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { PlayService } from 'src/app/play/shared/services/play.service';
import { PlaySearch } from 'src/app/play/shared/model/play-search.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() player: Player;

  user: User;

  plays$: Observable<Play[]>;

  lastPlays$: Observable<Play[]>;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private playerService: PlayerService,
    private userService: UserService,
    private playService: PlayService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();

    const search = new PlaySearch().deserialize({ player: this.player.name, size: 6 });

    this.lastPlays$ = from(this.playService.search(search)).pipe(
      map((page) => page.result)
    );

    this.plays$ = from(this.playService.allPlayerPlays(this.player)).pipe(
      map((page) => page.result)
    );
  }

  doAction(actionName: string) {
    if (actionName === 'delete') {
      this.playerService.delete(this.player).then(() => {
        this.router.navigate(['/', 'player']);
      });
    }
    if (actionName === 'edit') {
      // TODO
    }
    if (actionName === 'sync') {
      // TODO
      this.userService.claimPlayer(this.player.id).subscribe();
    }
  }

  goLibrary() {
    this.router.navigate(['/', 'boardgame'], {
      queryParams: {
        library_user_id: this.player.userId
      }
    });
  }

  goPlays() {
    this.router.navigate(['/', 'play'], {
      queryParams: {
        player: this.player.name
      }
    });
  }

}
