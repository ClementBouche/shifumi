import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/user/shared/model/user.model';
import { ShifumiMessage } from '../../model/shifumi-message.model';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { ShifumiMessageService } from '../../services/comment.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginated-comment',
  templateUrl: './paginated-comment.component.html',
  styleUrls: ['./paginated-comment.component.css']
})
export class PaginatedCommentComponent  implements OnInit, OnDestroy {

  @Input() room: string;

  // all messages
  data: ShifumiMessage[];

  // messages visible
  messages: ShifumiMessage[];
  // new message
  currentMessage: ShifumiMessage = new ShifumiMessage();
  // page
  page: {
    count: number;
    index: number;
    size: number;
  } = {
    count: 1,
    index: 0,
    size: 4
  };

  private user: User;

  private newSubscription: Subscription;

  private deletedSubscription: Subscription;

  private updatedSubscription: Subscription;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private service: ShifumiMessageService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.user = this.loginRegisterService.getUser();
    if (this.user) {
      this.currentMessage.sender = new User().deserialize(this.user);
    }

    this.service.joinRoom(this.room);

    this.service.messages.subscribe((data) => {
      this.data = data.sort((a, b) => a.id < b.id ? 1 : a.id === b.id ? 0 : -1);

      this.page.count = this.data.length;
      this.udpatePage();
    });

    this.newSubscription = this.service.newShifumiMessage.subscribe((message) => {
      this.data.unshift(message);
      this.page.count++;
      this.udpatePage();
    });

    this.deletedSubscription = this.service.deleted.subscribe((message) => {
      const index = this.getIndex(this.data, message);
      if (index != -1) {
        this.data.splice(index, 1);
      }
      this.page.count--;
      this.udpatePage();
    });

    this.updatedSubscription = this.service.updated.subscribe((message) => {
    });
  }

  ngOnDestroy() {
    if (this.newSubscription) this.newSubscription.unsubscribe();
    if (this.deletedSubscription) this.deletedSubscription.unsubscribe();
    if (this.updatedSubscription) this.updatedSubscription.unsubscribe();
  }

  addMessage(message: ShifumiMessage) {
    if (message.content === '') {
      return;
    }
    // socket emit
    this.service.addShifumiMessage(message);

    // new
    this.currentMessage = new ShifumiMessage();
    if (this.user) {
      this.currentMessage.sender = new User().deserialize({username: this.user.username});
    }
  }

  removeMessage(message: ShifumiMessage) {
    // socket emit
    this.service.removeShifumiMessage(message);
  }

  changePage(event: PageEvent) {
    this.page = {
      index: event.pageIndex,
      size: event.pageSize,
      count: event.length
    };

    this.udpatePage();
  }

  private udpatePage() {
    this.messages = this.data.slice(this.page.index * this.page.size, (this.page.index+ 1) * this.page.size);
    this.cd.markForCheck();
  }

  private getIndex(array: ShifumiMessage[], element: ShifumiMessage) {
    const index = array.findIndex((obj) => obj.id === element.id);
    if (index != -1) {
      return index;
    }
    return array.findIndex((obj) => {
      return obj.sender === element.sender && obj.content === element.content;
    });
  }

}
