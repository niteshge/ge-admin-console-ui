import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../../app-globals';
import { Router } from '@angular/router';

import * as Cookies from 'js-cookie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,  private router: Router) { }

  public getToken(): string {
    return localStorage.getItem('currentUser');
  }

  isUserLoggedIn() {
    return Cookies.get('auth-token') !== undefined;
  }

  // login(user:any) {
  //   let temp = {}
  //   temp["userName"] = user['userName'];
  //   temp["password"] = "\""+user['password'];
  //   temp["role"] = user['role'];
  //   // Cookies.set('auth-token', 'jhghjgggggghgg');
  //   this.http.post('http://'+myGlobals.server+':8787/token/jwt',temp)
  //   .subscribe((response:Response)=>{
  //     if(response!=null){
  //       console.log(response);
  //       sessionStorage.setItem('token', '');
  //       this.router.navigate(['/']);
  //   } else {
  //       alert("Authentication failed.")
  //       this.router.navigate(['login']);
  //   }
  //   });
    
  //     // return this.http.post('http://'+myGlobals.server+':8787/api/login/',user)
  //     // .subscribe((response:Response)=>{
  //     //   console.log(response);
  //     // });
  //   }

  login(username: string, password: string) {
    // let role:string = "admin";
    return this.http.post<any>('http://'+myGlobals.server+':8787/token/jwt', { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                console.log(user.token)
                // store user details and jwt token in local storage to keep user logged in between page refreshes

                // sessionStorage.setItem('currentUser', JSON.stringify(user.token));
                if(user.token!==null){
                localStorage.setItem('currentUser', user.token);
                return user;
                }else{
                  alert('Unauthorized');
                  window.location.reload();
                }
            }else{
              alert('Unauthorized');
              window.location.reload();
            }

            
        }));
}
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
