import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages = this.socket.fromEvent<Message[]>('messages').pipe(
    map((messages) => messages.map((msg) => new Message().deserialize(msg)))
  );

  newMessage = this.socket.fromEvent<Message>('message').pipe(
    map(msg => new Message().deserialize(msg))
  );

  updated = this.socket.fromEvent<Message>('messageUpdated').pipe(
    map(msg => new Message().deserialize(msg))
  );

  deleted = this.socket.fromEvent<Message>('messageDeleted').pipe(
    map(msg => new Message().deserialize(msg))
  );

  private room: string;

  constructor(private socket: Socket) { }

  joinRoom(room: string) {
    this.socket.emit('join', room);
    this.room = room;
  }

  addMessage(message: Message) {
    if (this.room) {
      message.room = this.room;
    }
    console.log('message', message);
    this.socket.emit('addMessage', message);
  }

  editMessage(message: Message) {
    if (this.room) {
      message.room = this.room;
    }
    this.socket.emit('editMessage', message);
  }

  removeMessage(message: Message) {
    if (this.room) {
      message.room = this.room;
    }
    this.socket.emit('removeMessage', message);
  }

}
