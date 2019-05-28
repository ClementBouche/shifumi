import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tagable } from 'src/app/core/model/tagable.interface';

import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { PlayService } from 'src/app/play/shared/services/play.service';

import { Player } from '../shared/model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { PlaySearch } from 'src/app/play/shared/model/play-search.model';
import { PlaysPage } from 'src/app/play/shared/model/plays-page.model';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit, Tagable {

  player: Player;

  plays: Play[];

  actions: string[] = ['delete', 'edit'];

  constructor(
    private playService: PlayService,
    private metadataTags: MetadataTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {player: Player}) => {
      this.player = data.player;

      const playSearch = new PlaySearch();
      playSearch.playerName = this.player.name;
      this.playService.search(playSearch).then((page: PlaysPage) => {
        this.plays = page.result;
        this.cd.markForCheck();
      });

      this.cd.markForCheck();
    });

    this.updateTags();
  }

  doAction(actionName: string) {
    console.log({actionName});
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
