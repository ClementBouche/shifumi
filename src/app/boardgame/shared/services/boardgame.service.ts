import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Boardgame } from '../model/boardgame.model';


@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  private boardgameUrl = `${environment.apiUrl}/boardgame/`; // url to web api

  private boardgames: Array<Boardgame>;

  constructor(
    private httpClient: HttpClient
  ) { }

  getBoardgames(): Promise<Boardgame[]> {
    return this.httpClient.get(this.boardgameUrl)
      .toPromise()
      .then(response => response as Boardgame[]);
  }

  getBoardgame(id: string): Promise<Boardgame> {
    const url = `${this.boardgameUrl}${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => response as Boardgame);
  }

}
