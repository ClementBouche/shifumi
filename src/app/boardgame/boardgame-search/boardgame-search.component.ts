import { Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { BoardgameSearch } from '../shared/model/boardgame-search.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BoardgameService } from '../shared/services/boardgame.service';
import { Boardgame } from '../shared/model/boardgame.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-boardgame-search',
  templateUrl: './boardgame-search.component.html',
  styleUrls: ['./boardgame-search.component.css']
})
export class BoardgameSearchComponent implements OnInit, OnDestroy {

  @Output() boardgameChange: EventEmitter<Boardgame[]> = new EventEmitter<Boardgame[]>();

  form = this.formBuilder.group({
    name: ['']
  });

  size: Number;

  private boardgameSearch: BoardgameSearch = new BoardgameSearch();

  private nameSubject: Subject<string> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.nameSubject.pipe(
        debounceTime(500)
      ).subscribe((value) => {
        this.boardgameSearch.name = value;
        this.doSearch();
      });
  }

  ngOnDestroy() {
    this.nameSubject.unsubscribe();
  }

  searchByName(name: string) {
    this.nameSubject.next(name);
  }

  search() {
    this.doSearch();
  }

  reset() {
    this.boardgameSearch = new BoardgameSearch();
    this.form.reset({name: ''});
    this.doSearch();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private doSearch() {
    this.boardgameService.search(this.boardgameSearch).then((boardgames) => {
      // component update
      this.size = boardgames.length;
      this.cd.markForCheck();
      // send data to parent
      this.boardgameChange.next(boardgames);
    });
  }

}
