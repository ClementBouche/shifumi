import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Player } from '../model/player.model';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { PlayerSearch } from '../model/player-seach.model';
import { PlayersPage } from '../model/players-page.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerUrl = `${environment.apiUrl}/player`; // url to web api

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlayers(size?: number, page?: number): Promise<Player[]> {
    let params = new HttpParams();
    if (size) { params = params.append('size', size.toString()); }
    if (page) { params = params.append('page', page.toString()); }

    return this.httpClient.get(this.playerUrl, {
        params: params
      })
      .toPromise()
      .then((response: any) => response.map((input) => new Player().deserialize(input)));
  }

  getPlayer(id: string): Promise<Player> {
    const url = `${this.playerUrl}/${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Player().deserialize(response));
  }

  statitics(id: string): Promise<Player> {
    const url = `${this.playerUrl}/${id}/statistic`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Player().deserialize(response));
  }

  create(player: Player) {
    const url = `${environment.apiUrl}/player`;
    return this.httpClient.post(url, player.serialize())
      .toPromise()
      .then(response => new Player().deserialize(response));
  }

  update(player: Player) {
    const url = `${environment.apiUrl}/player/${player.id}`;
    return this.httpClient.put(url, player.serialize())
      .toPromise()
      .then(response => new Player().deserialize(response));
  }

  delete(player: Player) {
    const url = `${environment.apiUrl}/player/${player.id}`;
    return this.httpClient.delete(url)
      .toPromise()
      .then(response => response);
  }

  getBoardgamePlayers(boardgame: Boardgame) {
    let url = `${environment.apiUrl}/player/search`
    return this.httpClient.post(url, {
        boardgame: boardgame.name
      })
      .toPromise()
      .then((response: any) => response.map((input) => new Player().deserialize(input)));
  }

  search(search: PlayerSearch): Promise<PlayersPage> {
    const url = `${this.playerUrl}/search`;

    return this.httpClient.post(url, search.serialize())
      .toPromise()
      .then(response => new PlayersPage().deserialize(response));
  };

}
