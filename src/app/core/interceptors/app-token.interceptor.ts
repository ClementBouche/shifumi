import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { UserService } from 'src/app/login/shared/services/user.service';
import { environment } from 'src/environments/environment';

/**
 * Intercepte les requêtes Http pour aposer le token d'authentification
 * @export
 * @class TokenInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable({
  providedIn: 'root'
})
export class AppTokenInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector
  ) { }

  /**
   * Intercepte les requêtes Http pour aposer le token d'authentification
   *
   * Implémente la méthode intercept de HttpInterceptor
   * @param {HttpRequest<any>} request request
   * @param {HttpHandler} next next
   * @returns {Observable<HttpEvent<any>>}
   * @memberOf AppTokenInterceptor
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userService = this.injector.get(UserService);

    // route d authentification
    const urlAuth = `${environment.apiUrl}/${environment.routes.authenticate}`;
    if (request.url.match(urlAuth)) {
      return next.handle(request);
    }

    if (this.getToken()) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.getToken()}`)
      });
    }


    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => event,
        (error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            userService.authFailedRequest();
          } else {
            // autre erreur réseau
          }
          // TODO throw Error ?
        }
      ),
      catchError((error) => {return throwError(error);})
    );
  }

  /**
   * Lecture du token depuis le localStorage du navigateur
   * @returns {string|null} le jeton d'authentification s'il existe
   * @memberOf AppTokenInterceptor
   */
  getToken(): string | null {
    const userService = this.injector.get(UserService);
    return userService.getUser() ? userService.getUser().token : null;
  }

}
