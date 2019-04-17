import { Component, OnInit, ChangeDetectorRef, Output, OnDestroy, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { BoardgameSearch } from 'src/app/boardgame/shared/model/boardgame-search.model';
import { BoardgameService } from 'src/app/boardgame/shared/services/boardgame.service';

@Component({
  selector: 'app-autocomplete-search-input',
  templateUrl: './autocomplete-search-input.component.html',
  styleUrls: ['./autocomplete-search-input.component.css']
})
export class AutocompleteSearchInputComponent implements OnInit, OnDestroy {

  inputControl: FormControl = new FormControl();

  boardgames: Array<Boardgame>;

  @Input() placeholder: string = 'Rechercher...';

  @Output() boardgameSelected: EventEmitter<Boardgame> = new EventEmitter<Boardgame>();

  private formSubscription: Subscription;

  constructor(
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formSubscription = this.inputControl.valueChanges
        .pipe(debounceTime(500))
        .subscribe((namePart) => {
          if (typeof namePart != 'string') {
            return;
          }
          const search = new BoardgameSearch().deserialize({name: namePart, size: 10});
          this.boardgameService.search(search).then(boardgamePage => {
            this.boardgames = boardgamePage.result;
            this.cd.markForCheck();
          });
        });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  displayFunction(bg: Boardgame) {
    if (bg) {
      console.log({bg});
      return bg.name;
    }
    return '';
  }

  select(bg: Boardgame) {
    this.boardgameSelected.emit(bg);
  }

}
