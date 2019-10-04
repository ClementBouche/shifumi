import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayService } from '../shared/services/play.service';
import { Play } from '../shared/model/play.model';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { Score } from '../shared/model/score.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.css'],
})
export class PlayViewComponent implements OnInit, Tagable {

  play: Play;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    private metadataTags: MetadataTagsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {play: Play}) => {
      this.play = data.play;
      this.cd.markForCheck();
    });

    this.updateTags();
  }

  actionScore(score: Score) {
    this.router.navigate(['/', 'player', score.player.name]);
  }

  goBoardgame() {
    if (this.play.boardgameId) {
      this.router.navigate(['/', 'boardgame', this.play.boardgameId]);
    }
  }

  updateTags() {
    if (this.play) {
      this.metadataTags.updateTitle(this.play.boardgameName + ' le ' + this.play.date);
      this.metadataTags.updateDescription(this.play.boardgameName + ' joué à / au ' + this.play.place + ' le ' + this.play.date);
    }
  }

}
