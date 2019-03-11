import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BoardgameSearch } from '../shared/model/boardgame-search.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boardgame-search',
  templateUrl: './boardgame-search.component.html',
  styleUrls: ['./boardgame-search.component.css']
})
export class BoardgameSearchComponent implements OnInit, OnDestroy {

  @Output() searchCompleted: EventEmitter<BoardgameSearch> = new EventEmitter<BoardgameSearch>();

  form: FormGroup = this.formBuilder.group({
    name: ['']
  });

  private boardgameSearch: BoardgameSearch = new BoardgameSearch();

  private nameSubject: Subject<string> = new Subject();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.nameSubject.pipe(
        debounceTime(500)
      ).subscribe(() => {
        // run a new search with actual input name
        this.search();
      });
  }

  ngOnDestroy() {
    this.nameSubject.unsubscribe();
  }

  searchByName() {
    this.nameSubject.next();
  }

  reset() {
    this.form.reset({
      name: ''
    });
    this.search();
  }

  isFormValid(): boolean {
    // update boardgameSearch with form values
    this.boardgameSearch.name = this.form.value.name;
    return true;
  }

  search() {
    if (this.isFormValid()) {
      this.searchCompleted.emit(this.boardgameSearch);
    }
  }

}
