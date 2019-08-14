import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-boardgame-table',
  templateUrl: './boardgame-table.component.html',
  styles: [`
    .container {
      max-height: 400px;
      overflow: auto;
    }
    table {
      width: 100%;
    }
    .chips {
      display: flex;
      padding-bottom: 10px;
    }
    .chips > * {
      padding: 10px;
    }
  `]
})
export class BoardgameTableComponent implements OnInit, OnChanges {

  @Input() boardgame: Boardgame;

  @Input() plays: Play[];

  displayedColumns: string[] = ['id', 'player', 'count', 'win_rate'];

  tableData: any[];

  title: string;

  counts: any;

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.load();
  }

  ngOnChanges() {
    this.load();
  }

  private load() {
    this.tableData = this.getTableData(this.boardgame, this.plays);
    this.title = this.getTitle();

    this.counts = {
      fives: this.tableData.filter((bg) => bg.count >= 5 && bg.count < 10).length,
      dimes: this.tableData.filter((bg) => bg.count >= 10 && bg.count < 25).length,
      quarters: this.tableData.filter((bg) => bg.count >= 25 && bg.count < 100).length,
      hundreds: this.tableData.filter((bg) => bg.count >= 100).length,
    };
  }

  private getTableData(boardgame: Boardgame, plays: Play[]) {
    return this.tableService.createBgTable(boardgame, plays);
  }

  private getTitle() {
    return 'Toutes les parties';
  }

}
