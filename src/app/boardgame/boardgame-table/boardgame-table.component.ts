import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Boardgame } from '../shared/model/boardgame.model';
import { PageEvent } from '@angular/material';
import { BoardgameService } from '../shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-table',
  templateUrl: './boardgame-table.component.html',
  styleUrls: ['./boardgame-table.component.css']
})
export class BoardgameTableComponent implements OnInit {

  boardgames: Boardgame[];

  constructor(
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.boardgameService.getBoardgames(10, 1)
        .then(result => {
          this.boardgames = result;
          this.cd.detectChanges();
        });
  }

  changePage(pageEvent: PageEvent) {
    this.boardgameService.getBoardgames(pageEvent.pageSize, pageEvent.pageIndex + 1)
        .then(result => {
          this.boardgames = result;
          this.cd.detectChanges();
        });
  }

}
