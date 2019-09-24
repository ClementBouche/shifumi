import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { Player } from 'src/app/player/shared/model/player.model';
import { PlayerService } from 'src/app/player/shared/services/player.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-user-player',
  templateUrl: './user-player.component.html',
  styleUrls: ['./user-player.component.css']
})
export class UserPlayerComponent implements OnInit {

  user: User;

  player: Player;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();
    if (!this.user) {
      return;
    }

    
  }

}
