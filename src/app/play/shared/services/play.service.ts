import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Play } from '../model/play.model';


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
      .then(response => response as Play[]);
  }

  getPlay(id: string): Promise<Play> {
    const url = `${this.playUrl}${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => response as Play);
  }

}
