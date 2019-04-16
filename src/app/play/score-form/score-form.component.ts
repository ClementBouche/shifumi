import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Score } from '../shared/model/score.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NumericValidator } from 'src/app/core/validators/numeric.validator';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent implements OnInit, OnDestroy {

  @Input() score: Score;

  @Output() scoreChanged: EventEmitter<Score> = new EventEmitter<Score>();

  @Output() scoreDeleted: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  form: FormGroup;

  private changeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      playerName: ['', Validators.required],
      new: [false],
      winner: [false],
      value: [0, NumericValidator],
      role: ['']
    });

    this.changeSubscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe((val) => {
      this.submit();
    });

    if (this.score) {
      return this.updateForm();
    }
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

  openDialog() {
    console.log('open select player dialog');
  }

  delete() {
    this.scoreDeleted.emit(true);
  }

  private updateForm() {
    this.form.patchValue({
      playerName: this.score.playerName,
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
    this.score = this.form.value as Score;
    return true;
  }

}
