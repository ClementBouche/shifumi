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
import { map, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { UserService } from 'src/app/user/shared/services/user.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { User } from 'src/app/user/shared/model/user.model';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit, Tagable {

  player: Player;

  constructor(
    private playerService: PlayerService,
    private userService: UserService,
    private metadataTags: MetadataTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      map((data: {player: Player}) => data.player),
      switchMap((player) => from(this.playerService.statitics(player.id)))
    ).subscribe((player) => {
      this.player = player;
      this.cd.markForCheck();
    });

    this.updateTags();
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

  updateTags() {
    if (this.player) {
      this.metadataTags.updateDescription('Shifumi - ' + this.player.name);
    }
  }

}
