import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Player } from '../../model/player.model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @Input() player: Player;

  @Output() playerChanged: EventEmitter<Player> = new EventEmitter<Player>();

  form: FormGroup;

  formError: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      playername: [this.player.name, Validators.required],
      theme: []
    });
  }

}
