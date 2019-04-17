import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { Player } from '../shared/model/player.model';
import { Router } from '@angular/router';

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
    this.router.navigate(['player', 'view', playerid]);
  }

}
