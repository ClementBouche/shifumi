import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    private boardgameService: BoardgameService
  ) { }

  ngOnInit() {
    this.boardgame$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
          return this.boardgameService.getBoardgame(params.get('id'));
      }));
  }

}
