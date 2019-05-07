import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Play } from '../../model/play.model';
import { Score } from '../../model/score.model';

@Component({
  selector: 'app-play-info',
  templateUrl: './play-info.component.html',
  styleUrls: ['./play-info.component.css']
})
export class PlayInfoComponent implements OnInit {

  @Input() play: Play;

  @Input() listItem: boolean = false;

  @Input() displayName: boolean = true;

  @Input() index: number;

  @Output() scoreClicked: EventEmitter<Score> = new EventEmitter<Score>();

  constructor() { }

  ngOnInit() {
  }

  scoreAction(score: Score) {
    this.scoreClicked.emit(score);
  }

}
