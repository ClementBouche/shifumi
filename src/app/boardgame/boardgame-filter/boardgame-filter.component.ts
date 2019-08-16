import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { from } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

import { BoardgameSearch } from '../shared/model/boardgame-search.model';

import { BoardgameService } from '../shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-filter',
  templateUrl: './boardgame-filter.component.html',
  styleUrls: ['./boardgame-filter.component.css']
})
export class BoardgameFilterComponent implements OnInit {

  @Input() search: BoardgameSearch;

  @Output() searchChanged: EventEmitter<BoardgameSearch> = new EventEmitter<BoardgameSearch>();

  form: FormGroup;

  thematics: string[];

  mechanics: string[];

  constructor(
    private boardgameService: BoardgameService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(this.search.name),
      min: this.fb.control(this.search.time.min),
      max: this.fb.control(this.search.time.max),
      thematics: this.fb.array([]),
      mechanics: this.fb.array([]),
    });

    from(this.boardgameService.getThematics()).pipe(
      map((values) => {
        this.thematics = values;
        const fa = this.form.get('thematics') as FormArray;
        values.forEach((value) => fa.push(this.fb.control(false)));
        return values;
      })
    ).subscribe();

    from(this.boardgameService.getMechanics()).pipe(
      map((values) => {
        this.mechanics = values;
        const fa = this.form.get('mechanics') as FormArray;
        values.forEach((value) => fa.push(this.fb.control(false)));
        return values;
      })
    ).subscribe();

    this.form.valueChanges.pipe(
      debounceTime(500),
      filter((form) => this.buildSearch())
    ).subscribe(() => {
      this.searchChanged.emit(this.search);
    });
  }

  onlyTheme(value: string, index: number) {
    this.form.get('thematics').patchValue(
      this.thematics.map((v, i) => i === index)
    );
  }

  onlyMech(value: string, index: number) {
    this.form.get('mechanics').patchValue(
      this.mechanics.map((v, i) => i === index)
    );
  }

  private buildSearch(): boolean {
    if (!this.form.valid) {
      return false;
    }
    this.search.name = this.form.value.name;
    this.search.time.min = this.form.value.min;
    this.search.time.max = this.form.value.max === 120 ? 1440 : this.form.value.max;
    this.search.thematics = this.getThematics();
    this.search.mechanics = this.getMechanics();
    // force la nouvelle pagination
    this.search.page = 1;
    return true;
  }

  private getThematics() {
    const data = this.thematics.filter((value, index) => {
      return this.form.value.thematics[index];
    });
    return data;
  }

  private getMechanics() {
    const data = this.mechanics.filter((value, index) => {
      return this.form.value.mechanics[index];
    });
    return data;
  }

}
