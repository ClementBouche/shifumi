import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

import { ShifumiMessage } from '../model/shifumi-message.model';

@Injectable({
  providedIn: 'root'
})
export class ShifumiMessageService {

  messages = this.socket.fromEvent<ShifumiMessage[]>('messages').pipe(
    map((messages) => messages.map((msg) => new ShifumiMessage().deserialize(msg)))
  );

  newShifumiMessage = this.socket.fromEvent<ShifumiMessage>('message').pipe(
    map(msg => new ShifumiMessage().deserialize(msg))
  );

  updated = this.socket.fromEvent<ShifumiMessage>('messageUpdated').pipe(
    map(msg => new ShifumiMessage().deserialize(msg))
  );

  deleted = this.socket.fromEvent<ShifumiMessage>('messageDeleted').pipe(
    map(msg => new ShifumiMessage().deserialize(msg))
  );

  private room: string;

  constructor(private socket: Socket) { }

  joinRoom(room: string) {
    this.socket.emit('join', room);
    this.room = room;
  }

  addShifumiMessage(message: ShifumiMessage) {
    if (this.room) {
      message.room = this.room;
    }
    this.socket.emit('addMessage', message.serialize());
  }

  editShifumiMessage(message: ShifumiMessage) {
    if (this.room) {
      message.room = this.room;
    }
    this.socket.emit('editMessage', message.serialize());
  }

  removeShifumiMessage(message: ShifumiMessage) {
    if (this.room) {
      message.room = this.room;
    }
    this.socket.emit('removeMessage', message.serialize());
  }

}
