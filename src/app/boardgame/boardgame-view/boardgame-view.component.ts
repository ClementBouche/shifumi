import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Boardgame } from '../shared/model/boardgame.model';
import { BoardgameService } from '../shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit {

  boardgame: Boardgame;

  constructor(
    private boardgameService: BoardgameService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {boardgame: Boardgame}) => {
      this.boardgame = data.boardgame;
      this.cd.markForCheck();
    });
  }

  import() {
    this.boardgameService.getPreview(this.boardgame.xmlId, false).then((bg) => {
      this.router.navigate(['boardgame', bg.id]);
    });
  }

}
