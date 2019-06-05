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

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit, Tagable {

  player: Player;

  loading: boolean = true;

  plays: Play[];

  actions: string[] = ['delete', 'edit'];

  constructor(
    private playerService: PlayerService,
    private playService: PlayService,
    private metadataTags: MetadataTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      map((data: {player: Player}) => {
        this.player = data.player;
        // TODO where put this ???
        this.playerService.statitics(this.player.id).then((player) => {
          this.player = player;
          this.cd.markForCheck();
        });
        // fin TODO
        return new PlaySearch().deserialize({ player: this.player.name });
      }),
      switchMap((playSearch: PlaySearch) => this.playService.search(playSearch))
    ).subscribe((page: PlaysPage) => {
      this.plays = page.result;
      this.loading = false;
      this.cd.markForCheck();
    });

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
  }

  updateTags() {
    if (this.player) {
      this.metadataTags.updateDescription('Shifumi - ' + this.player.name);
    }
  }

  search() {
    this.router.navigate(['/', 'play'], {
      queryParams: {
        player: this.player.name
      }
    });
  }

}
