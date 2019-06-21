import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayService } from '../shared/services/play.service';
import { Play } from '../shared/model/play.model';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { Score } from '../shared/model/score.model';

@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.css'],
})
export class PlayViewComponent implements OnInit, Tagable {

  play: Play;

  actions = ['format_paint', 'edit', 'delete'];
  // actions = ['format_paint', 'star', 'edit', 'delete'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playService: PlayService,
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

  doAction(actionName: string) {
    if (actionName == 'format_paint') {
      this.router.navigate(['/', 'play', 'copy', this.play.id]);
    }
    if (actionName == 'star') {
      console.log('star');
    }
    if (actionName == 'edit') {
      this.router.navigate(['/', 'play', 'update', this.play.id]);
    }
    if (actionName == 'delete') {
      this.playService.delete(this.play).then(() => {
        this.router.navigate(['/', 'play'])
      });
    }
  }

  actionScore(score: Score) {
    this.router.navigate(['/', 'player', score.playerName]);
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
