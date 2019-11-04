import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, debounceTime } from 'rxjs/operators';

import { PlayerSearch } from '../shared/model/player-seach.model';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {

  @Output() searchSubmited: EventEmitter<PlayerSearch> = new EventEmitter<PlayerSearch>();

  form: FormGroup = this.formBuilder.group({
    name: [''],
    orderBy: ['play'],
    plays: [0],
  });

  private playerSearch: PlayerSearch = new PlayerSearch();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // read search from route
    this.route.queryParams.pipe(
      map((params) => {
        this.playerSearch = new PlayerSearch().deserialize(params);
        this.patchForm(this.playerSearch);
      })
    ).subscribe();

    // search on valueChanges (name)
    this.form.valueChanges.pipe(
      debounceTime(200),
      map((value) => this.search())
    ).subscribe();
  }

  search() {
    if (this.isFormValid()) {
      this.searchSubmited.emit(this.playerSearch);
    }
  }

  reset() {
    this.playerSearch = new PlayerSearch();
    this.patchForm(this.playerSearch);
    this.search();
  }

  private patchForm(search: PlayerSearch) {
    this.form.patchValue({
      name: search.name,
      orderBy: search.order,
      plays: search.minPlay,
    }, {
      emitEvent: false
    });
  }

  private isFormValid() {
    this.playerSearch.name = this.form.value.name;
    this.playerSearch.order = this.form.value.orderBy;
    this.playerSearch.minPlay = this.form.value.plays;
    // force la nouvelle pagination
    this.playerSearch.page = 1;
    return true;
  }

}
