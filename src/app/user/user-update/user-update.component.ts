import { Component, OnInit } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';
import { LoginRegisterService } from 'src/app/login/shared/services/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private loginRegisterService: LoginRegisterService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // TODO utiliser le systeme de guard pour retourner au login
    this.user$ = this.loginRegisterService.logginEvent.pipe(
      startWith(this.loginRegisterService.getUser()),
      switchMap(() => this.userService.me()),
    );
  }

  update(user: User) {
    this.userService.selfUpdate(user).subscribe(() => {
      this.router.navigate(['user']);
    });
  }

}
