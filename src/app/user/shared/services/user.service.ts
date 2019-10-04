import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { LibraryItem } from '../model/library-item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  me() {
    const url = `${environment.apiUrl}/me`;
    return this.http.get(url)
      .pipe(
        map((response) => new User().deserialize(response))
      );
  }

  selfUpdate(user: User) {
    const url = `${environment.apiUrl}/me`;
    return this.http.post(url, user.serialize())
      .pipe(
        map((response) => new User().deserialize(response))
      );
  }

  getUsers() {
    const url = `${environment.apiUrl}/user`;
    return this.http.get(url)
      .pipe(
        map((response: any[]) => response.map((input) => new User().deserialize(input)))
      );
  }

  getUserLibrary(userid: string) {
    const url = `${environment.apiUrl}/user/${userid}/library`;
    return this.http.get(url)
      .pipe(
        map((response: any[]) => response.map((item) => new LibraryItem().deserialize(item)))
      );
  }

  claimPlayer(id: string) {
    return this.me().pipe(
      map((user) => {
        if (user.player.idsClaimed.indexOf(id) === -1) {
          user.player.idsClaimed.push(id);
        }
        return user;
      }),
      switchMap((user) => this.selfUpdate(user))
    );
  }

}
