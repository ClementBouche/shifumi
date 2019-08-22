import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { TokenReponse } from '../model/token-response.model';
import { User } from 'src/app/user/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  logginEvent: EventEmitter<User> = new EventEmitter<User>();

  private user: User;

  constructor(
    private router: Router
  ) { }

  getUser() {
    return this.user;
  }

  private setUser(user: User) {
    this.user = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.logginEvent.emit(user);
  }

  registerFromAuthentification(response: TokenReponse) {
    if (!response.success) {
      return false;
    }
    const user = new User();
    user.id = response.id;
    user.token = response.token;
    user.username = response.username;
    this.setUser(user);
    return true;
  }

  registerFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.setUser(user);
    } else {
      this.user = new User();
    }
  }

  logout() {
    // clear token remove user from local storage to log user out
    this.user = new User();
    localStorage.removeItem('currentUser');
    this.logginEvent.emit(null);
  }

  authFailedRequest() {
    this.logout();
    this.router.navigate(['/login']);
  }

}
