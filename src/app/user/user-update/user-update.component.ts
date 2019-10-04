import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { User } from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';
import { LoginRegisterService } from 'src/app/home/shared/services/login-register.service';
import { Player } from 'src/app/player/shared/model/player.model';

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

  updateUser(user: User) {
    this.userService.selfUpdate(user).subscribe(() => {
      this.router.navigate(['user']);
    });
  }

  updatePlayer(player: Player) {
  }

}
