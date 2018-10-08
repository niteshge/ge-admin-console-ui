import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConditionThreeService {


  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllConditionThree(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditiononetofour/getallcrunchbasetechnologyroundthree?ver='+randomValue,{'params':this.httpParams});
  }

  updateConditionThree(conditionThree:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/updatecrunchbasetechnologyroundthree',conditionThree,{'params':this.httpParams});
  }

  deleteConditionThree(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/conditiononetofour/deletecrunchbasetechnologyroundthree/'+id,{'params':this.httpParams});
  }

  saveConditionThree(conditionThree){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/savecrunchbasetechnologyroundthree',conditionThree,{'params':this.httpParams});
  }
}
