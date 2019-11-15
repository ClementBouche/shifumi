import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShifumiMessage } from '../../model/shifumi-message.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent implements OnInit {

  @Input() comment: ShifumiMessage;

  @Output() removeTrigger: EventEmitter<ShifumiMessage> = new EventEmitter<ShifumiMessage>();

  editable: boolean = false;

  constructor(
    private loginRegisterService: LoginRegisterService
  ) { }

  ngOnInit() {
    const user = this.loginRegisterService.getUser();
    if (user && user.username === this.comment.sender.username) {
      this.editable = true;
    }
  }

  remove() {
    this.removeTrigger.emit(this.comment);
  }

}
