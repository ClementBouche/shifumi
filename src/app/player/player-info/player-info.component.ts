import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/model/player.model';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() player: Player;

  @Input() listItem: boolean = false;

  udpateRoute: string;

  constructor() { }

  ngOnInit() {
    if (!this.listItem && this.player) {
      this.udpateRoute = '/player/update/' + this.player.id;
    }
  }

}
