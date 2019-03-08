import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgameService } from '../shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  @Input() boardgames: Boardgame[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  view(boardgameid: string) {
    // this.router.navigate(['boardgame', 'view', boardgameid], { relativeTo: this.route });
    this.router.navigate(['boardgame', 'view', boardgameid]);
  }

}
