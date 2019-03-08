import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Boardgame } from './shared/model/boardgame.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardgames: Boardgame[];

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (!this.boardgames) {
    }
  }

  displayResult($event) {
    console.log({$event});
    // this.router.navigate(['boardgame', 'list']);
    this.boardgames = $event;
    this.cd.markForCheck();
  }

}
