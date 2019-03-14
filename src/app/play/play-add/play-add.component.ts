import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Play } from '../shared/model/play.model';
import { PlayService } from '../shared/services/play.service';
import { BoardgamePickDialogComponent } from 'src/app/shared/boardgame-pick-dialog/boardgame-pick-dialog.component';

@Component({
  selector: 'app-play-add',
  templateUrl: './play-add.component.html',
  styleUrls: ['./play-add.component.css']
})
export class PlayAddComponent implements OnInit {

  play: Play;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playService: PlayService,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.play = new Play();
    // TODO if route alors update
    this.route.params.subscribe((params) => {
      if (params.id) {
        return this.playService.getPlay(params.id).then((play) => {
          this.play = play;
          this.cd.markForCheck();
        });
      }
    });
  }

  resetPlay() {
    this.play = new Play();
  }

  onSubmit() {
    // TODO update
    this.router.navigate(['play', 'view', this.play.id]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(BoardgamePickDialogComponent, {
      width: '500px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
