import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Play } from '../../model/play.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  @Input() plays: Play[];

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  view(playid: string) {
    this.router.navigate(['play', playid]);
  }

}
