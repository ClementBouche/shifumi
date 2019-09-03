import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Player } from '../../model/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() players: Player[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  view(playerid: string) {
    this.router.navigate(['player', playerid]);
  }

}
