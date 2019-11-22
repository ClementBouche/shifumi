import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/player/shared/model/player.model';
import { PlayerSearch } from 'src/app/player/shared/model/player-seach.model';
import { PlayerService } from 'src/app/player/shared/services/player.service';
import { User } from '../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goUpdate() {
    this.router.navigate(['/', 'user', 'edit'])
  }

}
