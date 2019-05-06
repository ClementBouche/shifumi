import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Player } from '../shared/model/player.model';
import { Tagable } from 'src/app/core/model/tagable.interface';
import { MetadataTagsService } from 'src/app/core/services/metadata-tags.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit, Tagable {

  player: Player;

  actions: string[] = ['delete', 'edit'];

  constructor(
    private metadataTags: MetadataTagsService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {player: Player}) => {
      this.player = data.player;
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

}
