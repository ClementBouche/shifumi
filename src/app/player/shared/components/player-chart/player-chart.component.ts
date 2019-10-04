import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlayService } from 'src/app/play/shared/services/play.service';

import { Play } from 'src/app/play/shared/model/play.model';
import { Player } from '../../model/player.model';
import { PlaysPage } from 'src/app/play/shared/model/plays-page.model';
import { ChartData } from 'src/app/shared-chart/model/chart-data.model';
import { ChartService } from 'src/app/shared-chart/services/chart.service';

@Component({
  selector: 'app-player-chart',
  templateUrl: './player-chart.component.html',
  styleUrls: ['./player-chart.component.css']
})
export class PlayerChartComponent implements OnInit {

  @Input() player: Player;

  @Input() plays: Play[];

  @Input() type: string = 'player';

  chartData: ChartData;

  title: string;

  constructor(
    private playService: PlayService,
    private chartService: ChartService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (!this.plays) {
      // asynchronous data
      from(this.playService.allPlayerPlays(this.player)).pipe(
        map((page: PlaysPage) => page.result),
        map((plays: Play[]) => this.getChartData(this.player, plays))
      ).subscribe((chartData) => {
        this.chartData = chartData;
        this.cd.markForCheck();
      });
    } else {
      // synchronous data
      this.chartData = this.getChartData(this.player, this.plays);
    }
    this.title = this.getTitle();
  }

  private getChartData(player: Player, plays: Play[]) {
    if (this.type === 'player') {
      return this.chartService.createDonutChart(player, plays);
    }
    if (this.type === 'playerCount') {
      return this.chartService.createByNumbersDonut(player, plays);
    }
    if (this.type === 'time') {
      return this.chartService.createByTimeDonut(player, plays);
    }
  }

  private getTitle() {
    if (this.type === 'player') {
      return 'Joue le plus avec...';
    }
    if (this.type === 'playerCount') {
      return 'Nombres de joueurs';
    }
    if (this.type === 'time') {
      return 'Temps de jeux';
    }
  }

}
