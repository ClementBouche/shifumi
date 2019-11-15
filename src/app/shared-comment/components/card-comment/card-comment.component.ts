import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShifumiMessage } from '../../model/shifumi-message.model';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent implements OnInit {

  @Input() comment: ShifumiMessage;

  @Output() removeTrigger: EventEmitter<ShifumiMessage> = new EventEmitter<ShifumiMessage>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.removeTrigger.emit(this.comment);
  }

}
