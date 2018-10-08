import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{


    constructor(public auth: AuthService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${this.auth.getToken()}`
        }
      });

      let headers1 = new HttpHeaders();
      headers1.append('authorization_token', 'Token ' + this.auth.getToken())
      console.log("the header value is ",headers1.get('authorization_token'));
      let p = request.headers
      p.set("token","somevalue");
      request = request.clone({
        
        headers: headers1
      });
      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    // setting the accept header
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

      return next.handle(request);
    }
  }
