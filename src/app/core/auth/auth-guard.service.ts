// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot
// } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if(this.authService.isUserLoggedIn()) {
//       return true;
//     } else {
//     this.router.navigate(['/login']);
//     return false;
//     }
//   }
// }
