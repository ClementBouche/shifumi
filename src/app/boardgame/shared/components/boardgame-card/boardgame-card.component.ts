import { Component, OnInit, Input } from '@angular/core';

import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

import { Boardgame } from '../../model/boardgame.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardgame-card',
  templateUrl: './boardgame-card.component.html',
  styleUrls: ['./boardgame-card.component.css']
})
export class BoardgameCardComponent implements OnInit {

  @Input() boardgame: Boardgame;

  constructor(
    private loginService: LoginRegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/', 'boardgame', this.boardgame.id]);
  }

}
