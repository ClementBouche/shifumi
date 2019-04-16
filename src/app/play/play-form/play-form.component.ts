import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

import { Play } from '../shared/model/play.model';
import { PlayService } from '../shared/services/play.service';
import { BoardgamePickDialogComponent } from 'src/app/shared/boardgame-pick-dialog/boardgame-pick-dialog.component';
import { Boardgame } from '../../boardgame/shared/model/boardgame.model';
import { Score } from '../shared/model/score.model';

@Component({
  selector: 'app-play-form',
  templateUrl: './play-form.component.html',
  styleUrls: ['./play-form.component.css']
})
export class PlayFormComponent implements OnInit {

  @Input() boardgame: Boardgame;

  @Input() play: Play;

  // create or update ?
  @Input() newPlay: boolean = true;

  form: FormGroup = this.formBuilder.group({
    boardgameName: [''],
    date: [''],
    place: [''],
    playingTime: [0],
    incomplete: [false],
    nbPlayer: [0],
    scores: [new Array<Score>()]
  });

  private dateFormat: string = "YYYY-MM-DD";

  constructor(
    private playService: PlayService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.play) {
      return this.playToForm();
    }
    this.play = new Play();
    if (this.boardgame) {
      this.form.patchValue({
        boardgameName: this.boardgame.name,
        playingTime: this.boardgame.time.average,
      });
    }
    if (this.newPlay) {
      this.form.patchValue({
        date: moment()
      });
    }
    this.cd.markForCheck();
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
    this.playToForm();
    return false;
  }

  submit() {
    if (this.isFormValid()) {
      console.log('valid', this.play);
    }
  }

  changeScore(updatedScore: Score, index: number) {
    // copy without change
    this.form.value.scores[index] = Object.assign(this.form.value.scores[index], updatedScore);
  }

  private playToForm() {
    this.form.patchValue({
      boardgameName: this.play.boardgameName,
      date: this.play.date,
      place: this.play.place,
      playingTime: this.play.playingTime,
      incomplete: this.play.incomplete,
      nbPlayer: this.play.scores.length,
      scores: this.play.scores.map(sc => Object.assign({}, sc))
    });
    this.cd.markForCheck();
  }

  private isFormValid(): boolean {
    // update boardgameSearch with form values
    this.play.boardgameName = this.form.value.boardgameName;
    this.play.date = moment(this.form.value.date).format(this.dateFormat);
    this.play.place = this.form.value.place;
    this.play.playingTime = this.form.value.playingTime;
    this.play.incomplete = this.form.value.incomplete;
    this.play.scores = this.form.value.scores.map(sc => Object.assign({}, sc));
    // TODO les score sont gerer independament
    return true;
  }

}
