import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../model/player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;

  // TODO: define three sizes for all cards: small, medium, large
  @Input() size: string;

  @Input() detail: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
