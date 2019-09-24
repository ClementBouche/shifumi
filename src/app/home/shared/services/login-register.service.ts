import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { TokenReponse } from '../model/token-response.model';
import { User } from 'src/app/user/shared/model/user.model';
import { UserService } from 'src/app/user/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  logginEvent: EventEmitter<User> = new EventEmitter<User>();

  private user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  isConnect() {
    return this.user && this.user.username && this.user.username !== '';
  }

  getUser() {
    return this.user;
  }

  getToken() {
    return localStorage.getItem('currentToken');
  }

  registerFromAuthentification(response: TokenReponse) {
    if (!response.success) {
      return false;
    }
    localStorage.setItem('currentToken', response.token);
    this.setUser(response.user);
    return true;
  }

  registerFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.userService.me().subscribe((me) => {
        // final user
        this.setUser(me);
      });
      // tmp user
      this.setUser(user);
    } else {
      this.user = null;
    }
    console.log('user', this.user);
  }

  logout() {
    // clear token remove user from local storage to log user out
    this.user = null;
    localStorage.removeItem('currentUser');
    this.logginEvent.emit(null);
  }

  authFailedRequest() {
    this.logout();
    this.router.navigate(['/login']);
  }

  private setUser(user: User) {
    this.user = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.logginEvent.emit(user);
  }

}
