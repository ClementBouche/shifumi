import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';
import { Message } from 'src/app/shared/model/message.model';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit, OnDestroy {

  @Input() title: string = 'Commentaires';

  @Input() room: string;

  messages: Message[];

  currentMessage: Message = new Message();

  private newSubscription: Subscription;

  private deletedSubscription: Subscription;

  private updatedSubscription: Subscription;

  constructor(
    private service: MessageService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.service.joinRoom(this.room);

    this.service.messages.subscribe((data) => {
      this.messages = data;
      this.cd.markForCheck();
    });

    this.newSubscription = this.service.newMessage.subscribe((message) => {
      this.messages.push(message);
      this.cd.markForCheck();
    });

    this.deletedSubscription = this.service.deleted.subscribe((message) => {
      const index = this.getIndex(this.messages, message);
      if (index != -1) {
        this.messages.splice(index, 1);
      }
      this.cd.markForCheck();
    });

    this.updatedSubscription = this.service.updated.subscribe((message) => {
    });
  }

  ngOnDestroy() {
    if (this.newSubscription) this.newSubscription.unsubscribe();
    if (this.deletedSubscription) this.deletedSubscription.unsubscribe();
    if (this.updatedSubscription) this.updatedSubscription.unsubscribe();
  }

  addMessage() {
    // socket emit
    this.service.addMessage(this.currentMessage);

    // new
    this.currentMessage = new Message();
  }

  remove(message: Message) {
    // socket emit
    this.service.removeMessage(message);
  }

  edit(message: Message) {
    const index = this.getIndex(this.messages, message);
    if (index != -1) {
      this.messages[index] = message;
      this.cd.markForCheck();
    }

    // socket emit
    this.service.editMessage(message);
  }

  private getIndex(array: Message[], element: Message) {
    const index = array.findIndex((obj) => obj.id === element.id);
    if (index != -1) {
      return index;
    }
    return array.findIndex((obj) => {
      return obj.sender === element.sender && obj.content === element.content;
    });
  }

}
