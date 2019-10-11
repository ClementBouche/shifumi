import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { NumericValidator } from 'src/app/core/validators/numeric.validator';
import { Score } from '../shared/model/score.model';
import { Player } from 'src/app/player/shared/model/player.model';
import { PlayerPickDialogComponent } from 'src/app/core/entry-components/player-pick-dialog/player-pick-dialog.component';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent implements OnInit, OnDestroy {

  @Input() editable: boolean = true;

  @Input() score: Score;

  @Output() scoreChanged: EventEmitter<Score> = new EventEmitter<Score>();

  @Output() scoreDeleted: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  form: FormGroup;

  private changeSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      playerName: ['', Validators.required],
      playerId: [''],
      new: [false],
      winner: [false],
      value: [null],
      role: [''],
      team: [''],
    });

    this.changeSubscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe((val) => {
      this.submit();
    });

    if (this.score) {
      return this.updateForm();
    }
    this.score = new Score();
  }

  ngOnDestroy() {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

  submit() {
    if (this.isFormValid()) {
      this.scoreChanged.emit(this.score);
    } else {
      // TODO nothing
    }
  }

  doSelection(player: Player) {
    this.setPlayer(player);
  }

  doValueChanged(input: any) {
    if (input instanceof Player) {
      // all user
      this.setPlayer(input);
    } else {
      // only name
      const player = new Player().deserialize({name: input});
      this.setPlayer(player);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(PlayerPickDialogComponent, {
      width: '500px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe((result: Player) => {
      if (result) {
        this.setPlayer(result);
      }
    });
  }

  setPlayer(player: Player) {
    this.form.patchValue({
      playerName: player.name,
      playerId: player.id
    });
    this.cd.markForCheck();
  }

  deleteAction() {
    this.scoreDeleted.emit(true);
  }

  private updateForm() {
    this.form.patchValue({
      playerName: this.score.player ? this.score.player.name : '',
      new: this.score.new,
      winner: this.score.winner,
      value: this.score.value
    });
    this.cd.markForCheck();
  }

  private isFormValid(): boolean {
    if (this.form.invalid) {
      return false;
    }
    this.score.new = this.form.value.new;
    this.score.player = {
      id: this.form.value.playerId,
      name: this.form.value.playerName
    };
    this.score.value = this.form.value.value;
    this.score.winner = this.form.value.winner;
    this.score.role = this.form.value.role;
    this.score.team = this.form.value.team;
    return true;
  }

}
