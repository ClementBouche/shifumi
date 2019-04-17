import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Boardgame } from './../../boardgame/shared/model/boardgame.model';

@Component({
  selector: 'app-boardgame-pick-dialog',
  templateUrl: './boardgame-pick-dialog.component.html',
  styleUrls: ['./boardgame-pick-dialog.component.css']
})
export class BoardgamePickDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<BoardgamePickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  select(bg: Boardgame) {
    this.data = bg;
  }

}
