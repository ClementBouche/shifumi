import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

import { environment } from 'src/environments/environment.local';

import { ShifumiEvent } from '../model/shifumi-event.model';
import { ShifumiEventSearch } from '../model/shifumi-event-search.model';
import { ShifumiEventPage } from '../model/shifumi-event-page';

const EVENTS: ShifumiEvent[] = [
  new ShifumiEvent().deserialize({id: '1', name: 'Game party', description: 'Who wanna play?'}),
  new ShifumiEvent().deserialize({id: '2', name: 'Midi Jeux', description: 'It\' about MidiGame'}),
  new ShifumiEvent().deserialize({id: '3', name: 'Soirée au Nid', description: 'Soirée au Nid'}),
];

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // url to web api
  private url = `${environment.apiUrl}/event`;

  constructor(
    private client: HttpClient
  ) { }

  getEvents(): Promise<ShifumiEvent[]> {
    const url = `${this.url}`;
    return from([
        EVENTS
      ]).toPromise();
  }

  getEvent(id: string): Promise<ShifumiEvent> {
    const url = `${this.url}/id`;
    const result = EVENTS.find(event => event.id === id);
    return from([result]).toPromise();
  }

  search(search: ShifumiEventSearch): Promise<ShifumiEventPage> {
    const dumbPage = new ShifumiEventPage().deserialize({index: 1, size: 0, count: 0});
    const pageResult = EVENTS.filter(event => {
      let keep = true;
      if (search.playerId) {
        keep = event.players.findIndex((player => player.id === search.playerId)) !== -1;
      }
      if (search.status) {
        keep = event.status === search.status;
      }
      return keep;
    }).reduce((page, event) => {
      page.count = page.count + 1;
      page.size++;
      page.result ? page.result.push(event) : page.result = [event];
      return page;
    }, dumbPage);
    return from([pageResult]).toPromise();
  }

}
