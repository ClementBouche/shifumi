import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Play } from '../shared/model/play.model';
import { PlayService } from '../shared/services/play.service';

@Component({
  selector: 'app-play-add',
  templateUrl: './play-add.component.html',
  styleUrls: ['./play-add.component.css']
})
export class PlayAddComponent implements OnInit {

  play: Play;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playService: PlayService,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.play = new Play();
    // TODO if route alors update
    this.route.params.subscribe((params) => {
      if (params.id) {
        return this.playService.getPlay(params.id).then((play) => {
          this.play = play;
          this.cd.markForCheck();
        });
      }
    });
  }

  resetPlay() {
    this.play = new Play();
  }

  onSubmit() {
    // TODO update
    this.router.navigate(['play', 'view', this.play.id]);
  }

}
