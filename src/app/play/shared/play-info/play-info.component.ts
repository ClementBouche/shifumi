import { Component, OnInit, Input } from '@angular/core';

import { Play } from '../model/play.model';

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

  constructor() { }

  ngOnInit() {
  }

}
