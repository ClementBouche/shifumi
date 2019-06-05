import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, switchMap, filter, startWith } from 'rxjs/operators';

import { Player } from 'src/app/player/shared/model/player.model';
import { PlayerService } from 'src/app/player/shared/services/player.service';
import { PlayerSearch } from 'src/app/player/shared/model/player-seach.model';
import { PlayersPage } from 'src/app/player/shared/model/players-page.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-search-input',
  templateUrl: './player-search-input.component.html',
  styleUrls: ['./player-search-input.component.css']
})
export class PlayerSearchInputComponent implements OnInit {

  inputControl: FormControl = new FormControl();

  players: Array<Player>;

  // TODO: observable and async pipe
  options$: Observable<PlayersPage>;

  status: string;

  @Input() namePart: string = '';

  @Input() placeholder: string = 'Rechercher...';

  @Output() playerSelected: EventEmitter<Player> = new EventEmitter<Player>();

  @Output() valueChanged: EventEmitter<String> = new EventEmitter<String>();

  constructor(
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    if (this.namePart) {
      this.inputControl.setValue({
        name: this.namePart
      });
    }

    this.inputControl.valueChanges.pipe(
      startWith(this.namePart),
      debounceTime(200),
      map((value) => {
        this.valueChanged.emit(value)
        return value;
      }),
      filter((value) => typeof value === 'string'),
      map((value: string) => new PlayerSearch().deserialize({name: value, size: 10})),
      switchMap((search: PlayerSearch) => this.playerService.search(search))
    )
    .subscribe((playerPage: PlayersPage) => {
      this.players = playerPage.result;
      this.autoSelect(this.players);
    });
  }

  createPlayer() {
    if (this.getName().length > 0) {
      const player = new Player();
      player.name = this.getName();
      this.playerService.create(player).then((player) => {
        this.autoSelect([player]);
      });
    }
  }

  displayFunction(result: Player) {
    return result ? result.name : undefined;
  }

  select(option: Player) {
    this.status = 'found';
    this.playerSelected.emit(option);
  }

  private autoSelect(players: Player[]) {
    // autoselection if exact spell
    if (players.length > 0 &&
        players[0].name.toLowerCase() === this.getName().toLowerCase()
    ) {
      this.inputControl.setValue(players[0], { emitEvent: true });
      this.status = 'found';
    } else {
      this.status = 'unknown';
    }
  }

  private getName() {
    if (this.inputControl.value == null) {
      return '';
    }
    return typeof this.inputControl.value === 'string' ? this.inputControl.value : this.inputControl.value.name; 
  }

}
