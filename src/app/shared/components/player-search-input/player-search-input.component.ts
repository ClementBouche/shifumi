import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Player } from 'src/app/player/shared/model/player.model';
import { PlayerService } from 'src/app/player/shared/services/player.service';
import { PlayerSearch } from 'src/app/player/shared/model/player-seach.model';

@Component({
  selector: 'app-player-search-input',
  templateUrl: './player-search-input.component.html',
  styleUrls: ['./player-search-input.component.css']
})
export class PlayerSearchInputComponent implements OnInit, OnDestroy {

  inputControl: FormControl = new FormControl();

  players: Array<Player>;

  @Input() placeholder: string = 'Rechercher...';

  @Output() playerSelected: EventEmitter<Player> = new EventEmitter<Player>();

  private formSubscription: Subscription;

  constructor(
    private playerService: PlayerService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formSubscription = this.inputControl.valueChanges
        .pipe(debounceTime(500))
        .subscribe((namePart) => {
          if (typeof namePart != 'string') {
            return;
          }

          const search = new PlayerSearch().deserialize({name: namePart, size: 10});
          this.playerService.search(search).then(playerPage => {
            this.players = playerPage.result;
            this.cd.markForCheck();
          });

        });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  displayFunction(result: Player) {
    if (result) {
      return result.name;
    }
    return '';
  }

  select(option: Player) {
    this.playerSelected.emit(option);
  }

}
