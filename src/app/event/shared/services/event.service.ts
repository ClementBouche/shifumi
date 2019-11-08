import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

import { environment } from 'src/environments/environment.local';

import { ShifumiEvent } from '../model/shifumi-event.model';
import { ShifumiEventSearch } from '../model/shifumi-event-search.model';
import { ShifumiEventPage } from '../model/shifumi-event-page';

import { Player } from 'src/app/player/shared/model/player.model';
import { Boardgame } from 'src/app/boardgame/shared/model/boardgame.model';
import { BoardgamePoll } from '../model/boardgame-poll.model';

const BOARDGAMES: Boardgame[] = [
  new Boardgame().deserialize({
    id: '1', name: 'Gloomhaven', year_published: 2018, thumbnail: 'http://localhost:4200/assets/shifumi-icon.png',
    min_players: 1, max_players: 5, playing_time: 120
  }),
];

const PLAYERS: Player[] = [
  new Player().deserialize({
    id: '1', name: 'Bababouch', play_time: 1000,
    plays_count: '402', win_ratio: '41', boardgames_count: '42'
  }),
  new Player().deserialize({
    id: '1', name: 'MJ', play_time: 279,
    plays_count: '72', win_ratio: '54', boardgames_count: '20'
  }),
  new Player().deserialize({
    id: '1', name: 'Flo', play_time: 879,
    plays_count: '247', win_ratio: '27', boardgames_count: '21'
  }),
];

const POLL: BoardgamePoll = new BoardgamePoll().deserialize({id: 1, votes: [
  {boardgame: BOARDGAMES[0], player: PLAYERS[0]},
  {boardgame: BOARDGAMES[0], player: PLAYERS[1]},
  {boardgame: BOARDGAMES[0], player: PLAYERS[2]},
]});

const EVENTS: ShifumiEvent[] = [
  new ShifumiEvent().deserialize({id: '1', name: 'Game party', description: 'Who wanna play?', players: PLAYERS, poll: POLL}),
  new ShifumiEvent().deserialize({id: '2', name: 'Midi Jeux', description: 'It\' about MidiGame'}),
  new ShifumiEvent().deserialize({id: '3', name: 'Soirée au Nid', description: 'Soirée au Nid', place: 'Le Nid'}),
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
