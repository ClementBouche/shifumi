import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { Observable } from 'rxjs';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
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
    private loginRegisterService: LoginRegisterService,
    private userService: UserService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    const user = this.loginRegisterService.getUser();
    console.log(user);
    if (user.admin) {
      this.users$ = this.userService.getUsers();
    }
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
