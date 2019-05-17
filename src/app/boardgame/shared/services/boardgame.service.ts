import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Boardgame } from '../model/boardgame.model';
import { BoardgameSearch } from '../model/boardgame-search.model';
import { BoardgamesPage } from '../model/boardgames-page.model';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  // private boardgameUrl = `${environment.apiUrl}/boardgame/`; // url to web api
  // private databaseUrl = `${environment.apiUrl}/database/boardgame`; // url to web api

  constructor(
    private httpClient: HttpClient
  ) { }

  getBoardgames(size?: number, page?: number): Promise<Boardgame[]> {
    let params = new HttpParams();
    if (size) { params = params.append('size', size.toString()); }
    if (page) { params = params.append('page', page.toString()); }

    const url = `${environment.apiUrl}/boardgame`;
    return this.httpClient.get(url, {
        params: params
      })
      .toPromise()
      .then((response: any) => response.map((input) => new Boardgame().deserialize(input)));
  }

  getBoardgame(id: string): Promise<Boardgame> {
    const url = `${environment.apiUrl}/boardgame/${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Boardgame().deserialize(response));
  }

  search(search: BoardgameSearch): Promise<BoardgamesPage> {
    if (search.extended) {
      return this.extendedSearch(search.name, 100);
    }
    const url = `${environment.apiUrl}/boardgame/search`;
    return this.httpClient.post(url, search.serialize())
      .toPromise()
      .then(response => new BoardgamesPage().deserialize(response));
  }

  extendedSearch(name: string, size: number): Promise<BoardgamesPage> {
    const url = `${environment.apiUrl}/database/boardgame`;
    let params = new HttpParams()
        .append('name', name)
        .append('size', size.toString());
    return this.httpClient.get(url, {
        params: params
      })
      .toPromise()
      .then((response: any) => {
        const results = response.map((input) => new Boardgame().deserialize(input));
        const boardgamePage = new BoardgamesPage();
        boardgamePage.page = 1;
        boardgamePage.count = results.length;
        boardgamePage.size = results.length;
        boardgamePage.result = results;
        return boardgamePage;
      });
  }

  getPreview(xmlId: string, preview: boolean = true): Promise<Boardgame> {
    const url = `${environment.apiUrl}/database/boardgame/${xmlId}?preview=${preview}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Boardgame().deserialize(response));
  }

}
