import { Injectable } from '@angular/core';
import { Player } from 'src/app/player/shared/model/player.model';
import { Play } from 'src/app/play/shared/model/play.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  createBgTable(player: Player, plays: Play[]) {
    const data = plays.reduce((previous, play) => {
      const boardgameId = play.boardgameId;
      const win = play.scores.find((sc) => sc.playerName === player.name).winner;
      const index = previous.findIndex((el) => el.boardgameId === boardgameId);
      if (index == -1) {
        previous.push({
          boardgameId: boardgameId,
          name: play.boardgameName,
          win_rate: win ? 1 : 0,
          count: 1
        });
      } else {
        previous[index].count += 1;
        previous[index].win_rate += win ? 1 : 0;
      }
      return previous;
    }, []).sort((a, b) => b.count - a.count).map((value, index) => {
      value.id = index + 1;
      value.win_rate = Math.round(value.win_rate / value.count * 100);
      value.win_rate = `${value.win_rate} %`
      return value;
    });

    return data;
  }

}
