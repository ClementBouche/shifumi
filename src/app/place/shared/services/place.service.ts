import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { PlaceSearch } from '../model/place-search.model';
import { PlacesPage } from '../model/places-page.model';
import { Place } from '../model/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlaces(size?: number, page?: number): Promise<Place[]> {
    let params = new HttpParams();
    if (size) { params = params.append('size', size.toString()); }
    if (page) { params = params.append('page', page.toString()); }

    const url = `${environment.apiUrl}/place`;
    return this.httpClient.get(url, {
        params: params
      })
      .toPromise()
      .then((response: any) => response.map((input) => new Place().deserialize(input)));
  }

  getPlace(id: string): Promise<Place> {
    const url = `${environment.apiUrl}/place/${id}`;
    return this.httpClient.get(url)
      .toPromise()
      .then(response => new Place().deserialize(response));
  }

  search(search: PlaceSearch): Promise<PlacesPage> {
    // dumb search
    console.log(search);
    return this.getPlaces(9999, 1).then((places) => {
      const page = new PlacesPage();
      page.count = places.length;
      page.page = search.page;
      page.size = search.size;
      const first = (page.page - 1) * page.size;
      const last = (page.page - 0) * page.size;
      page.result = places.slice(first, last);
      return page;
    });
    // const url = `${environment.apiUrl}/place/search`;
    // return this.httpClient.post(url, search.serialize())
    //   .toPromise()
    //   .then(response => new PlacesPage().deserialize(response));
  }

}
