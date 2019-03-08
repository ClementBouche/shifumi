import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BoardgameService } from '../shared/services/boardgame.service';
import { Observable } from 'rxjs';
import { Boardgame } from '../shared/model/boardgame.model';

@Component({
  selector: 'app-boardgame-view',
  templateUrl: './boardgame-view.component.html',
  styleUrls: ['./boardgame-view.component.css']
})
export class BoardgameViewComponent implements OnInit {

  boardgame$: Observable<Boardgame>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private boardgameService: BoardgameService
  ) { }

  ngOnInit() {
    this.boardgame$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
          return this.boardgameService.getBoardgame(params.get('id'));
      }));
  }

  gotoList() {
    this.location.back();
  }

}
