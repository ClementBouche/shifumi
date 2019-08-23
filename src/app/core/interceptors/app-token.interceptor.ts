import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LoginRegisterService } from 'src/app/login/shared/services/login-register.service';

/**
 * Intercepte les requêtes Http pour aposer le token d'authentification
 * @export
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
   * @param request request
   * @param next next
   * @memberOf AppTokenInterceptor
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginRegisterService = this.injector.get(LoginRegisterService);

    // route d authentification
    const urlAuth = `${environment.apiUrl}/authenticate`;
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
          if (error.status === 401 || error.status === 403) {
            loginRegisterService.authFailedRequest();
          } else {
            // autre erreur réseau
          }
          // TODO throw Error ?
        }
      ),
      catchError((error) => throwError(error))
    );
  }

  /**
   * Lecture du token depuis le localStorage du navigateur
   * @returns le jeton d'authentification s'il existe
   * @memberOf AppTokenInterceptor
   */
  getToken(): string | null {
    const loginRegisterService = this.injector.get(LoginRegisterService);
    return loginRegisterService.getUser() ? loginRegisterService.getUser().token : null;
  }

}
