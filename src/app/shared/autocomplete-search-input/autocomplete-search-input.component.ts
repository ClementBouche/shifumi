import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { debounceTime } from 'rxjs/operators';
import { BoardgameSearch } from 'src/app/boardgame/shared/model/boardgame-search.model';
import { BoardgameService } from 'src/app/boardgame/shared/services/boardgame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocomplete-search-input',
  templateUrl: './autocomplete-search-input.component.html',
  styleUrls: ['./autocomplete-search-input.component.css']
})
export class AutocompleteSearchInputComponent implements OnInit {

  boardgameForm: FormControl = new FormControl();

  boardgames: Array<Boardgame>;

  constructor(
    private boardgameService: BoardgameService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.boardgameForm.valueChanges
        .pipe(debounceTime(500))
        .subscribe((namePart) => {
          const search = new BoardgameSearch().deserialize({name: namePart});
          this.boardgameService.search(search).then(result => {
            this.boardgames = result.slice(0, 10);
            this.cd.markForCheck();
          });
        });
  }

  select(boardgameName: String) {
    const result = this.boardgames.find(bg => bg.name === boardgameName);
    if (result) {
      this.goTo(result);
    }
  }


  goTo(boardgame: Boardgame) {
    console.log({boardgame});
    this.router.navigate(['/', 'boardgame', boardgame.id]);
  }

}
