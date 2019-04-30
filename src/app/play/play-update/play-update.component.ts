import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Play } from '../shared/model/play.model';
import { PlayService } from '../shared/services/play.service';

@Component({
  selector: 'app-play-update',
  templateUrl: './play-update.component.html',
  styleUrls: ['./play-update.component.css']
})
export class PlayUpdateComponent implements OnInit {

  play: Play;

  searching: boolean = true;

  constructor(
    private playService: PlayService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.playId) {
        return this.playService.getPlay(params.playId).then((play) => {
          this.play = play;
          this.searchEnded();
        });
      } else {
        this.searchEnded();
      }
    });
  }

  savePlay(event: Play) {
    this.playService.update(event).then((play) => {
      // TODO
      console.log('play saved !!!!', play);
    });
  }

  private searchEnded() {
    this.searching = false;
    this.cd.detectChanges();
  }

}
