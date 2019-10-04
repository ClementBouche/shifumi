import { Component, OnInit, Input } from '@angular/core';

import { Play } from '../../model/play.model';
import { Router } from '@angular/router';
import { PlayService } from '../../services/play.service';

@Component({
  selector: 'app-play-action',
  templateUrl: './play-action.component.html',
  styleUrls: ['./play-action.component.css']
})
export class PlayActionComponent implements OnInit {

  @Input() play: Play;

  actions = ['format_paint', 'edit', 'delete'];

  constructor(
    private playService: PlayService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  doAction(actionName: string) {
    if (actionName === 'format_paint') {
      this.router.navigate(['/', 'play', 'copy', this.play.id]);
    }
    if (actionName === 'star') {
    }
    if (actionName === 'edit') {
      this.router.navigate(['/', 'play', 'update', this.play.id]);
    }
    if (actionName === 'delete') {
      this.playService.delete(this.play).then(() => {
        this.router.navigate(['/', 'play']);
      });
    }
  }

}
