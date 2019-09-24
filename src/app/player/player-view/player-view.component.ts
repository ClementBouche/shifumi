import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tagable } from 'src/app/core/model/tagable.interface';

import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { PlayService } from 'src/app/play/shared/services/play.service';

import { Player } from '../shared/model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { PlaySearch } from 'src/app/play/shared/model/play-search.model';
import { PlaysPage } from 'src/app/play/shared/model/plays-page.model';
import { PlayerService } from '../shared/services/player.service';
import { map, switchMap, filter } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { UserService } from 'src/app/user/shared/services/user.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { User } from 'src/app/user/shared/model/user.model';
import { LibraryItem } from 'src/app/user/shared/model/library-item.model';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit, Tagable {

  player: Player;

  loading: boolean = true;

  plays: Play[];

  actions: string[] = ['delete', 'edit', 'sync'];

  allPlays$: Observable<Play[]>;

  user: User;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private playerService: PlayerService,
    private playService: PlayService,
    private userService: UserService,
    private metadataTags: MetadataTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();

    this.route.data.pipe(
      map((data: {player: Player}) => {
        this.player = data.player;
        // TODO where put this ???
        this.playerService.statitics(this.player.id).then((player) => {
          this.player = player;
          this.cd.markForCheck();
        });
        // fin TODO
        return new PlaySearch().deserialize({ player: this.player.name, size: 6 });
      }),
      switchMap((playSearch: PlaySearch) => this.playService.search(playSearch))
    ).subscribe((page: PlaysPage) => {
      this.plays = page.result;
      this.loading = false;
      this.cd.markForCheck();
    });

    // all plays are retrieve for statistics
    this.allPlays$ = from(this.playService.allPlayerPlays(this.player)).pipe(
      map((page: PlaysPage) => page.result)
    );

    // sync action

    this.updateTags();
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

  updateTags() {
    if (this.player) {
      this.metadataTags.updateDescription('Shifumi - ' + this.player.name);
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
