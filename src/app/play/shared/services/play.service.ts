import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Play } from '../model/play.model';
import { PlaySearch } from '../model/play-search.model';
import { PlaysPage } from '../model/plays-page.model';
import { Player } from 'src/app/player/shared/model/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private playUrl = `${environment.apiUrl}/play/`; // url to web api

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlays(size?: number, page?: number): Promise<Play[]> {
    let params = new HttpParams();
    if (size) { params = params.append('size', size.toString()); }
    if (page) { params = params.append('page', page.toString()); }

    return this.httpClient.get(this.playUrl, {
        params: params
      })
      .toPromise()
      .then((response: any) => response.map((input) => new Play().deserialize(input)));
  }

  getPlay(id: string): Promise<Play> {
    const url = `${this.playUrl}${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Play().deserialize(response));
  }

  create(play: Play) {
    const url = `${environment.apiUrl}/play`;
    return this.httpClient.post(url, play.serialize())
      .toPromise()
      .then(response => new Play().deserialize(response));
  }

  update(play: Play) {
    const url = `${environment.apiUrl}/play/${play.id}`;
    return this.httpClient.put(url, play.serialize())
      .toPromise()
      .then(response => new Play().deserialize(response));
  }

  delete(play: Play) {
    const url = `${environment.apiUrl}/play/${play.id}`;
    return this.httpClient.delete(url)
      .toPromise()
      .then(response => response);
  }

  search(search: PlaySearch): Promise<PlaysPage> {
    const url = `${environment.apiUrl}/play/search`;
    return this.httpClient.post(url, search.serialize())
      .toPromise()
      .then(response => new PlaysPage().deserialize(response));
  };

  allPlayerPlays(player: Player): Promise<PlaysPage> {
    const url = `${environment.apiUrl}/play/search`;
    const search = new PlaySearch().deserialize({
      player: player.name,
      page: 1,
      size: player.counts.plays
    });
    return this.search(search);
  }

}
