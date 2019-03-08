import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Boardgame } from '../model/boardgame.model';
import { BoardgameSearch } from '../model/boardgame-search.model';


@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  private boardgameUrl = `${environment.apiUrl}/boardgame/`; // url to web api

  constructor(
    private httpClient: HttpClient
  ) { }

  getBoardgames(size?: number, page?: number): Promise<Boardgame[]> {
    let params = new HttpParams();
    if (size) { params = params.append('size', size.toString()); }
    if (page) { params = params.append('page', page.toString()); }

    return this.httpClient.get(this.boardgameUrl, {
        params: params
      })
      .toPromise()
      .then((response: any) => response.map((input) => new Boardgame().deserialize(input)));
  }

  search(search: BoardgameSearch): Promise<Boardgame[]> {
    const url = `${environment.apiUrl}/boardgame/search`;
    return this.httpClient.post(url, search.serialize())
      .toPromise()
      .then((response: any) => response.map((input) => new Boardgame().deserialize(input)));
  }

  getBoardgame(id: string): Promise<Boardgame> {
    const url = `${this.boardgameUrl}${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Boardgame().deserialize(response));
  }

}
