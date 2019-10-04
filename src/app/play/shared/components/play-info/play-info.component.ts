import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Play } from '../../model/play.model';
import { Score } from '../../model/score.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { User } from 'src/app/user/shared/model/user.model';
import { Router } from '@angular/router';

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

  @Output() scoreClicked: EventEmitter<Score> = new EventEmitter<Score>();

  user: User;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();
  }

  scoreAction(score: Score) {
    this.scoreClicked.emit(score);
  }

  goBoardgame() {
    this.router.navigate(['/', 'boardgame', this.play.boardgameId]);
  }

}
