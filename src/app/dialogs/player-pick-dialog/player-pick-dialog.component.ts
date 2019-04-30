import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Player } from 'src/app/player/shared/model/player.model';

@Component({
  selector: 'app-player-pick-dialog',
  templateUrl: './player-pick-dialog.component.html',
  styleUrls: ['./player-pick-dialog.component.css']
})
export class PlayerPickDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PlayerPickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  select(event: Player) {
    this.data = event;
  }

}
