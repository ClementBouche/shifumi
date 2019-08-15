import { Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import { BoardgameSearch } from '../shared/model/boardgame-search.model';
import { BoardgameService } from '../shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-search',
  templateUrl: './boardgame-search.component.html',
  styleUrls: ['./boardgame-search.component.css']
})
export class BoardgameSearchComponent implements OnInit, OnDestroy {

  @Output() searchCompleted: EventEmitter<BoardgameSearch> = new EventEmitter<BoardgameSearch>();

  form: FormGroup = this.formBuilder.group({
    name: [''],
    min: [0],
    max: [1440],
    extended: [false]
  });

  boardgameSearch: BoardgameSearch = new BoardgameSearch();

  openSearch: boolean = false;

  thematics: string[];
  allThematics: string[] = [];

  mechanics: string[];
  allMechanics: string[] = [];

  private routeSubscription: Subscription;

  constructor(
    private boardgameService: BoardgameService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.boardgameService.getThematics().then((thematics) => {
      this.allThematics = thematics;
      this.cd.markForCheck();
    });

    this.boardgameService.getMechanics().then((mechanics) => {
      this.allMechanics = mechanics;
      this.cd.markForCheck();
    });

    this.routeSubscription = this.route.queryParams.pipe(
      filter((params) => !this.compare(params, {})),
      distinctUntilChanged((x, y) => this.compare(x, y))
    ).subscribe((params) => {
      if (params.openSearch) {
        this.openSearch = params.openSearch;
      }
      this.boardgameSearch = new BoardgameSearch().deserialize(params);
      this.searchToForm();
    });

    this.form.valueChanges.pipe(
        debounceTime(500),
      ).subscribe(() => {
        this.search();
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  reset() {
    this.boardgameSearch = new BoardgameSearch();
    this.searchToForm();
    this.searchCompleted.emit(this.boardgameSearch);
  }

  search() {
    if (this.isFormValid()) {
      this.searchCompleted.emit(this.boardgameSearch);
    }
  }

  thematicChange(values: string[]) {
    this.thematics = values;
    this.search();
  }

  mechanicChange(values: string[]) {
    this.mechanics = values;
    this.search();
  }

  private searchToForm() {
    this.form.patchValue({
      name: this.boardgameSearch.name,
      min: this.boardgameSearch.time.min,
      max: this.boardgameSearch.time.max,
      extended: this.boardgameSearch.extended,
    });
    if (this.boardgameSearch.thematics) {
      this.thematics = Array.isArray(this.boardgameSearch.thematics) ? this.boardgameSearch.thematics : [this.boardgameSearch.thematics];
    }
    if (this.boardgameSearch.mechanics) {
      this.mechanics = Array.isArray(this.boardgameSearch.mechanics) ? this.boardgameSearch.mechanics : [this.boardgameSearch.mechanics];
    }
  }

  private isFormValid(): boolean {
    if (!this.form.valid) {
      return false;
    }
    // update boardgameSearch with form values
    if (this.form.value.extended && this.form.value.name.length < 3) {
      return false;
    }
    this.boardgameSearch.name = this.form.value.name;
    this.boardgameSearch.extended = this.form.value.extended;
    this.boardgameSearch.time.min = this.form.value.min;
    this.boardgameSearch.time.max = this.form.value.max;
    this.boardgameSearch.thematics = this.thematics;
    this.boardgameSearch.mechanics = this.mechanics;
    // force la nouvelle pagination
    this.boardgameSearch.page = 1;
    return true;
  }

  private compare(x, y): boolean {
    if (Object.entries(x).length !== Object.entries(y).length) {
      return false;
    }
    return Object.entries(x).findIndex((param) => {
      return x['param'] !== y['param'];
    }) === -1;
  }

}
