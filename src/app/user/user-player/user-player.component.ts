import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/model/user.model';
import { Player } from 'src/app/player/shared/model/player.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { PlayerService } from 'src/app/player/shared/services/player.service';

@Component({
  selector: 'app-user-player',
  templateUrl: './user-player.component.html',
  styleUrls: ['./user-player.component.css']
})
export class UserPlayerComponent implements OnInit {

  @Input() user: User;

  constructor(
  ) { }

  ngOnInit() {
  }

}
