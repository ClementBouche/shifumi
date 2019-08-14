import { Component, OnInit, Input } from '@angular/core';

import { Player } from '../shared/model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { TableService } from 'src/app/chart/shared/services/table.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  @Input() player: Player;

  @Input() plays: Play[];

  tableData: any[];

  displayedColumns: string[] = ['id', 'boardgame', 'count', 'win_rate'];

  title: string;

  counts: any;

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.tableData = this.getTableData(this.player, this.plays);
    this.title = this.getTitle();

    this.counts = {
      fives: this.tableData.filter((bg) => bg.count >= 5 && bg.count < 10).length,
      dimes: this.tableData.filter((bg) => bg.count >= 10 && bg.count < 25).length,
      quarters: this.tableData.filter((bg) => bg.count >= 25 && bg.count < 100).length,
      hundreds: this.tableData.filter((bg) => bg.count >= 100).length,
    };
  }

  private getTableData(player: Player, plays: Play[]) {
    return this.tableService.createPlayerTable(player, plays);
  }

  private getTitle() {
    return 'Toutes les parties';
  }

}
