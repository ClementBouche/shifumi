import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { TokenReponse } from '../../model/token-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username: string, password: string): Promise<TokenReponse> {
    const url = `${environment.apiUrl}/user/authenticate`;
    return this.httpClient.post(url, {
        username: username,
        password: password
      })
      .toPromise()
      .then(response => new TokenReponse().deserialize(response));
  }

}
