import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private adminService: AdminService,
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  update(user: User) {
  }

  delete(user: User) {
    this.adminService.delete(user.id).subscribe();
  }

  sync(user: User) {
    this.adminService.syncUser(user.id).subscribe();
  }

}
