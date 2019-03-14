import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private location: Location,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {boardgame: Boardgame}) => {
      this.boardgame = data.boardgame;
    });
  }

  gotoList() {
    this.location.back();
  }

  import() {
    this.boardgameService.getPreview(this.boardgame.xmlId, false).then((bg) => {
      this.boardgame.preview = false;
      this.cd.markForCheck();
      console.log({bg});
    });
  }

}
