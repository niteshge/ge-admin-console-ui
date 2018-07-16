import { Injectable } from '@angular/core';

// import * as Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    
  }

  isUserLoggedIn() {
    // return Cookies.get('auth-token') !== undefined;
    return true;
  }

  login() {
    // Cookies.set('auth-token', 'jhghjgggggghgg');
  }
}
