import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/model/player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
