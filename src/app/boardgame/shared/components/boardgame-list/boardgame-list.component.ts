import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Boardgame } from '../../model/boardgame.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  @Input() boardgames: Boardgame[];

  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  select(boardgame: Boardgame) {
    if (boardgame.id) {
      this.router.navigate(['boardgame', boardgame.id]);
    } else {
      this.router.navigate(['boardgame', 'preview', boardgame.xmlId])
    }
  }

}
