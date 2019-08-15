import { Injectable } from '@angular/core';

import { ChartData } from '../model/chart-data.model';
import { Player } from 'src/app/player/shared/model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
  ) { }

  createChart(): ChartData {
    return new ChartData().deserialize({
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [20, 19, 8, 5, 14, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRation: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createDonutChart(player: Player, plays: Play[]): ChartData {
    const players = plays.reduce((previous, play) => {
      const names = play.scores.map((sc) => sc.playerName);
      names.forEach((name) => {
        if (name == player.name) return;
        const index = previous.findIndex((o) => o.name === name);
        if (index == -1) {
          previous.push({
            name: name,
            count: 1
          });
        } else {
          previous[index].count += 1;
        }
      })
      return previous;
    }, []).sort((a, b) => b.count - a.count).slice(0, 6);

    const labels = players.map(p => `${p.name}: ${p.count} parties`);
    const data = players.map(p => p.count);

    const chart = new ChartData().createDonut();
    chart.data.datasets[0].data = data;
    chart.data.labels = labels;
    return chart;
  }

  createByNumbersDonut(player: Player, plays: Play[]): ChartData {
    const players = plays.reduce((previous, play) => {
      const playerCount = play.scores.length;
      const index = previous.findIndex((el) => el.player_count === playerCount);
      if (index == -1) {
        previous.push({
          player_count: playerCount,
          count: 1
        });
      } else {
        previous[index].count += 1;
      }
      return previous;
    }, []).sort((a, b) => b.count - a.count).slice(0, 6);

    const labels = players.map(p => `${p.player_count} joueurs: ${p.count} parties`);
    const data = players.map(p => p.count);

    const chart = new ChartData().createDonut();
    chart.data.datasets[0].data = data;
    chart.data.labels = labels;
    return chart;
  }

  createByTimeDonut(player: Player, plays: Play[]): ChartData {
    const byTimes = [
      {time: '-15 min', count: 0, min: 0, max: 15},
      {time: '15-45 min', count: 0, min: 15, max: 45},
      {time: '45-60 min', count: 0, min: 45, max: 60},
      {time: '60-120 min', count: 0, min: 60, max: 120},
      {time: '+120min', count: 0, min: 120, max: 99999999},
    ];
    const players = plays.reduce((previous, play: Play) => {
      const time = parseInt(play.playingTime);
      const index = previous.findIndex((t) => time > t.min && time <= t.max);
      if (index == -1) return previous;
      previous[index].count += 1;
      return previous;
    }, byTimes).sort((a, b) => b.count - a.count).slice(0, 6);

    const labels = players.map(p => `${p.time}: ${p.count} parties`);
    const data = players.map(p => p.count);

    const chart = new ChartData().createDonut();
    chart.data.datasets[0].data = data;
    chart.data.labels = labels;
    return chart;
  }

}
