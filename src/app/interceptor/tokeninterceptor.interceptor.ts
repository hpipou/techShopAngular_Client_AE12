import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokeninterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('http://localhost:3000/user/password') ||
        request.url.includes('http://localhost:3000/user/delete')) {
      // Récupère le token d'authentification depuis le localStorage ou tout autre endroit où tu le stockes
      const token = localStorage.getItem('token');

      // Clone la requête et ajoute le header d'authentification avec le token
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
