import { Injectable } from '@angular/core';
import { Player } from 'src/app/player/shared/model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  createPlayerTable(player: Player, plays: Play[]) {
    const data = plays.reduce((previous, play) => {
      const boardgameId = play.boardgameId;
      const win = play.scores.find((sc) => sc.playerName === player.name).winner;
      const index = previous.findIndex((el) => el.boardgameId === boardgameId);
      if (index == -1) {
        previous.push({
          boardgameId: boardgameId,
          boardgame: play.boardgameName,
          incomplete: play.incomplete ? 1 : 0,
          win_rate: win ? 1 : 0,
          count: 1
        });
      } else {
        previous[index].count += 1;
        previous[index].incomplete += play.incomplete ? 1 : 0;
        previous[index].win_rate += win ? 1 : 0;
      }
      return previous;
    }, []).sort((a, b) => b.count - a.count).map((value, index) => {
      value.id = index + 1;
      if (value.count === value.incomplete) {
        value.win_rate = '--';
      } else {
        value.win_rate = Math.round(value.win_rate / (value.count - value.incomplete) * 100);
        value.win_rate = `${value.win_rate} %`
      }
      return value;
    });

    return data;
  }

  createBgTable(boardgame: Boardgame, plays: Play[]) {
    const data = plays.reduce((previous, play) => {
      play.scores.forEach((sc) => {
        const playerName = sc.playerName;
        const win = sc.winner;
        // ajout des stats du joueurs
        const index = previous.findIndex((el) => el.player === playerName);
        if (index == -1) {
          previous.push({
            player: playerName,
            incomplete: play.incomplete ? 1 : 0,
            win_rate: win ? 1 : 0,
            count: 1
          });
        } else {
          previous[index].count += 1;
          previous[index].incomplete += play.incomplete ? 1 : 0;
          previous[index].win_rate += win ? 1 : 0;
        }
      });
      return previous;
    }, []).sort((a, b) => b.count - a.count).map((value, index) => {
      value.id = index + 1;
      if (value.count === value.incomplete) {
        value.win_rate = '--';
      } else {
        value.win_rate = Math.round(value.win_rate / (value.count - value.incomplete) * 100);
        value.win_rate = `${value.win_rate} %`
      }
      return value;
    });

    return data;
  }

}
