import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { BoardgameSearch } from '../shared/model/boardgame-search.model';

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
    max: [100],
    extended: [false]
  });

  private boardgameSearch: BoardgameSearch = new BoardgameSearch();

  private nameSubject: Subject<string> = new Subject();

  private routeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      if (Object.entries(params).length === 0 && params.constructor === Object) {
        // ne rien faire
      } else {
        this.boardgameSearch = new BoardgameSearch().deserialize(params);
        this.searchToForm();
      }
    });
    // subscribe keyup change
    this.nameSubject.pipe(
        debounceTime(500)
      ).subscribe(() => {
        // run a new search with actual input name
        this.search();
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.nameSubject.unsubscribe();
  }

  searchByName() {
    this.nameSubject.next();
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

  private searchToForm() {
    this.form.patchValue({
      name: this.boardgameSearch.name,
      min: this.boardgameSearch.time.min,
      max: this.boardgameSearch.time.max,
      extended: this.boardgameSearch.extended
    });
  }

  private isFormValid(): boolean {
    // update boardgameSearch with form values
    this.boardgameSearch.name = this.form.value.name;
    this.boardgameSearch.time.min = this.form.value.min;
    this.boardgameSearch.time.max = this.form.value.max;
    this.boardgameSearch.extended = this.form.value.extended;
    // force la nouvelle pagination
    this.boardgameSearch.page = 1;
    return true;
  }

}
