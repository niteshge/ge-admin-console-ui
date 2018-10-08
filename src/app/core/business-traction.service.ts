import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessTractionService {
  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllBusinessTractionMaster(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/api/businesstraction/getallbusinesstraction?ver='+randomValue, {'params':this.httpParams});
  }
}
