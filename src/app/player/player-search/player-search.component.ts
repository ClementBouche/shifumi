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
        this.form.patchValue({
          name: this.playerSearch.name
        }, {
          emitEvent: false
        });
      })
    ).subscribe();

    // search on valueChanges (name)
    this.form.controls.name.valueChanges.pipe(
      debounceTime(500),
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
    this.patchForm();
    this.search();
  }

  private patchForm() {
    this.form.patchValue({
      name: this.playerSearch.name
    });
  }

  private isFormValid() {
    this.playerSearch.name = this.form.value.name;
    // force la nouvelle pagination
    this.playerSearch.page = 1;
    return true;
  }

}
