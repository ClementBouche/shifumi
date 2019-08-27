import { Component, OnInit } from '@angular/core';
import { User } from './shared/model/user.model';
import { LoginRegisterService } from '../home/shared/services/login-register.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { startWith, map, switchMap, filter } from 'rxjs/operators';
import { UserService } from './shared/services/user.service';
import { AdminService } from './shared/services/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;

  users$: Observable<User[]>;

  actions = [{name: 'update', title: 'Mettre à jour', color: 'accent'}];

  constructor(
    private loginRegisterService: LoginRegisterService,
    private userService: UserService,
    private adminService: AdminService,
    private router: Router,
  ) { }

  ngOnInit() {
    // TODO utiliser le systeme de guard pour retourner au login
    this.user$ = this.loginRegisterService.logginEvent.pipe(
      startWith(this.loginRegisterService.getUser()),
      switchMap(() => this.userService.me()),
    );

    this.users$ = this.user$.pipe(
      filter((user) => user.admin),
      switchMap(() => this.userService.getUsers())
    );
  }

  goUpdate() {
    this.router.navigate(['user', 'edit']);
  }

  update(user: User) {
    console.log('update', user);
  }

  delete(user: User) {
    console.log('delete', user);
    this.adminService.delete(user.id).subscribe();
  }

  sync(user: User) {
    console.log('sync', user);
    this.adminService.syncUser(user.id).subscribe();
  }

}
