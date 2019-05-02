import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../../model/user.model';
import { TokenReponse } from '../../model/token-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
    this.router.navigate(['/login']);
  }

}
