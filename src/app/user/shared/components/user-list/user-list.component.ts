import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];

  @Output() userSynched: EventEmitter<User> = new EventEmitter<User>();

  @Output() userUpdated: EventEmitter<User> = new EventEmitter<User>();

  @Output() userDeleted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  userAction(user: User, action: string) {
    if (action === 'sync') {
      this.userSynched.emit(user);
    }
    if (action === 'update') {
      this.userUpdated.emit(user);
    }
    if (action === 'delete') {
      this.userDeleted.emit(user);
    }
  }

}
