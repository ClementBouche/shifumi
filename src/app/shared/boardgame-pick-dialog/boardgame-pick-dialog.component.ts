import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Boardgame } from './../../boardgame/shared/model/boardgame.model';
import { BoardgameSearch } from './../../boardgame/shared/model/boardgame-search.model';
import { BoardgameService } from './../../boardgame/shared/services/boardgame.service';

@Component({
  selector: 'app-boardgame-pick-dialog',
  templateUrl: './boardgame-pick-dialog.component.html',
  styleUrls: ['./boardgame-pick-dialog.component.css']
})
export class BoardgamePickDialogComponent implements OnInit, OnDestroy {

  boardgameForm: FormControl = new FormControl();

  boargames: Boardgame[];

  private formSubscription: Subscription;

  constructor(
    private dialogRef: MatDialogRef<BoardgamePickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private boardgameService: BoardgameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formSubscription = this.boardgameForm.valueChanges
        .pipe(debounceTime(500))
        .subscribe((namePart) => {
          const search = new BoardgameSearch().deserialize({name: namePart, size: 10});
          this.boardgameService.search(search).then(boardgamePage => {
            this.boargames = boardgamePage.result;
            this.cd.markForCheck();
          });
        });
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  select(boardgameName: string) {
    this.data.name = boardgameName;
  }

}
