import { Component, OnInit, Input } from '@angular/core';
import { Play } from '../../model/play.model';

@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.css']
})
export class PlayCardComponent implements OnInit {

  @Input() play: Play;

  constructor() { }

  ngOnInit() {
  }

}
