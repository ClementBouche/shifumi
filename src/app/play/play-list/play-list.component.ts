import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayService } from '../shared/services/play.service';
import { Play } from '../shared/model/play.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  plays: Play[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playService: PlayService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.playService.getPlays(10, 1).then((result) => {
      // get 10 first
      this.plays = result;
      this.cd.markForCheck();
    });
  }

  view(playid: string) {
    // this.router.navigate(['play', 'view', playid], { relativeTo: this.route });
    this.router.navigate(['play', 'view', playid]);
  }

}
