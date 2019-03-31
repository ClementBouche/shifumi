import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playService: PlayService
  ) { }

  ngOnInit() {
    // TODO if route alors update
    this.route.params.subscribe((params) => {
      if (params.id) {
        return this.playService.getPlay(params.id).then((play) => {
          this.play = play;
        });
      }
    });
  }

}
