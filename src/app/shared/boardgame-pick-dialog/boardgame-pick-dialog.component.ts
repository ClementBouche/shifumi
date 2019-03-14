import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

import { Boardgame } from './../../boardgame/shared/model/boardgame.model';
import { BoardgameSearch } from './../../boardgame/shared/model/boardgame-search.model';
import { BoardgameService } from './../../boardgame/shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-pick-dialog',
  templateUrl: './boardgame-pick-dialog.component.html',
  styleUrls: ['./boardgame-pick-dialog.component.css']
})
export class BoardgamePickDialogComponent implements OnInit {

  boardgameForm: FormControl = new FormControl();

  boargames: Boardgame[];

  constructor(
    private dialogRef: MatDialogRef<BoardgamePickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.boardgameForm.valueChanges
        .pipe(debounceTime(500))
        .subscribe((namePart) => {
          const search = new BoardgameSearch().deserialize({name: namePart});
          this.boardgameService.search(search).then(result => {
            this.boargames = result.slice(0, 10);
            this.cd.markForCheck();
          });
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  select(boardgameName: string) {
    this.data.name = boardgameName;
  }

}
