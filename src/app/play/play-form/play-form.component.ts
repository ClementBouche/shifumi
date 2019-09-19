import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

import { BoardgamePickDialogComponent } from 'src/app/core/entry-components/boardgame-pick-dialog/boardgame-pick-dialog.component';
import { Play } from '../shared/model/play.model';
import { Boardgame } from '../../boardgame/shared/model/boardgame.model';
import { Score } from '../shared/model/score.model';
import { User } from 'src/app/user/shared/model/user.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

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

  @Output() playSubmited: EventEmitter<Play> = new EventEmitter<Play>();

  form: FormGroup = this.formBuilder.group({
    boardgameName: [''],
    date: [''],
    place: [''],
    playingTime: [0],
    incomplete: [false],
    scores: [new Array<Score>()]
  });

  private dateFormat: string = "YYYY-MM-DD";

  constructor(
    private loginRegisterService: LoginRegisterService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit() {
    const user = this.loginRegisterService.getUser();

    if (this.play) {
      return this.playToForm();
    }
    this.play = new Play();
    if (this.boardgame) {
      this.patchForm(this.boardgame);
    }
    if (user) {
      this.addUser(user);
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
      if (result) {
        this.patchForm(result, false);
      }
    });
  }

  resetPlay() {
    this.playToForm();
    return false;
  }

  submit() {
    if (this.isFormValid()) {
      this.playSubmited.emit(this.play);
    }
  }

  changeScore(updatedScore: Score, index: number) {
    // copy without change
    this.form.value.scores[index] = Object.assign(this.form.value.scores[index], updatedScore);
  }

  deleteScore(index: number) {
    this.form.value.scores.splice(index, 1);
  }

  addPlayer() {
    this.form.value.scores.push(new Score());
  }

  private addUser(user: User) {
    const score = new Score();
    score.playerId = user.playerId;
    score.playerName = user.username;
    this.form.patchValue({
      scores: [score]
    });
    this.cd.markForCheck();
  }

  private playToForm() {
    this.form.patchValue({
      boardgameName: this.play.boardgameName,
      date: this.play.date,
      place: this.play.place,
      playingTime: this.play.playingTime,
      incomplete: this.play.incomplete,
      //scores: this.play.scores.map(sc => Object.assign({}, sc))
      scores: this.play.scores
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
    this.play.scores = this.form.value.scores;
    return true;
  }

  private patchForm(bg: Boardgame, resetScore = true) {
    this.form.patchValue({
      boardgameName: bg.name,
      playingTime: bg.time.average,
    });
    if (resetScore) {
      const nbPlayers = Math.round((bg.players.min + bg.players.max) / 2);
      this.form.patchValue({
        scores: Array.from(new Array(nbPlayers), (val, index) => new Score())
      });
    }
  }

}
