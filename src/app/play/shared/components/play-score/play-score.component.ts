import { Component, OnInit, Input } from '@angular/core';

import { Score } from '../../model/score.model';

@Component({
  selector: 'app-play-score',
  templateUrl: './play-score.component.html',
  styleUrls: ['./play-score.component.css']
})
export class PlayScoreComponent implements OnInit {

  @Input() score: Score;

  constructor() { }

  ngOnInit() {
  }

}
