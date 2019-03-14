import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form: FormGroup = this.formBuilder.group({
    boardgameName: [''],
    date: [''],
    place: [''],
    playingTime: [0],
    incomplete: [true],
    scores: ['']
  });

  private play: Play = new Play();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playService: PlayService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // TODO if route alors update
    this.route.params.subscribe((params) => {
      if (params.id) {
        return this.playService.getPlay(params.id).then((play) => {
          this.play = play;
          this.playToFrom();
          this.cd.markForCheck();
        });
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(BoardgamePickDialogComponent, {
      width: '500px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.form.patchValue({ boardgameName: result });
    });
  }
  
  resetPlay() {
    this.play = new Play();
    this.playToFrom();
  }

  submit() {
    if (this.isFormValid()) {
      console.log('submit', this.play);
    }
  }

  private playToFrom() {
    this.form.patchValue({
      boardgameName: this.play.boardgameName,
      date: this.play.date,
      place: this.play.place,
      playingTime: this.play.playingTime,
      incomplete: this.play.incomplete,
      scores: this.play.scores
    });
  }

  private isFormValid(): boolean {
    // update boardgameSearch with form values
    this.play.boardgameName = this.form.value.boardgameName;
    this.play.date = this.form.value.date;
    this.play.place = this.form.value.place;
    this.play.playingTime = this.form.value.playingTime;
    this.play.incomplete = this.form.value.incomplete;
    this.play.scores = this.form.value.scores;
    return true;
  }

}
