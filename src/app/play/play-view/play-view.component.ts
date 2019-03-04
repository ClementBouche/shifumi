import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PlayService } from '../shared/services/play.service';
import { Observable } from 'rxjs';
import { Play } from '../shared/model/play.model';

@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.css']
})
export class PlayViewComponent implements OnInit {

  play$: Observable<Play>;

  constructor(
    private route: ActivatedRoute,
    private playService: PlayService
  ) { }

  ngOnInit() {
    this.play$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
          return this.playService.getPlay(params.get('id'));
      }));
  }

}
