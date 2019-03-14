import { Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { BoardgameSearch } from '../shared/model/boardgame-search.model';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    max: [0],
    extended: [false]
  });

  private boardgameSearch: BoardgameSearch = new BoardgameSearch();

  private nameSubject: Subject<string> = new Subject();

  private routeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      this.boardgameSearch = new BoardgameSearch().deserialize(params);
      this.searchToForm();
      this.cd.detectChanges();
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
    return true;
  }

}
