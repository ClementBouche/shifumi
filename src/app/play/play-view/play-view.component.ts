import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PlayService } from '../shared/services/play.service';
import { Observable } from 'rxjs';
import { Play } from '../shared/model/play.model';

@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.css']
})
export class PlayViewComponent implements OnInit {

  play: Play;

  actions = ['format_paint', 'star', 'edit', 'delete'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playService: PlayService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {play: Play}) => {
      this.play = data.play;
      this.cd.markForCheck();
    });
  }

  doAction(actionName: string) {
    if (actionName == 'format_paint') {
      this.router.navigate(['/', 'play', 'add']);
    }
    if (actionName == 'star') {
      console.log('star');
    }
    if (actionName == 'edit') {
      this.router.navigate(['/', 'play', 'update', this.play.id]);
    }
    if (actionName == 'delete') {
      this.playService.delete(this.play).then(() => {
        this.router.navigate(['/', 'play'])
      });
    }
  }

}
