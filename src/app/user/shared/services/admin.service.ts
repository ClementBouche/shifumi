import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

  delete(id: string) {
    const url = `${environment.apiUrl}/user/${id}`;
    return this.http.delete(url)
      .pipe(
        map((response) => response)
      );
  }

  syncUser(id: string) {
    const url = `${environment.apiUrl}/user/${id}/claim`;
    return this.http.get(url)
      .pipe(
        map((response) => new User().deserialize(response))
      );
  }

}
