import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShifumiMessage } from '../../model/shifumi-message.model';

@Component({
  selector: 'app-input-comment',
  templateUrl: './input-comment.component.html',
  styleUrls: ['./input-comment.component.css']
})
export class InputCommentComponent implements OnInit {

  @Input() comment: ShifumiMessage;

  @Output() commentSubmited: EventEmitter<ShifumiMessage> = new EventEmitter<ShifumiMessage>();

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.commentSubmited.emit(this.comment);
  }

}
