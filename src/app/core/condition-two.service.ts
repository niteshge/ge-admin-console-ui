import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ConditionTwoService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }

  
  getAllConditionTwo(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditiononetofour/getallcrunchbasetechnologyroundtwo?ver='+randomValue,{'params':this.httpParams});
  }

  updateConditionTwo(conditionTwo:any){
    conditionTwo['CREATED TIMESTAMP'] = null;
    conditionTwo['MODIFIED TIMESTAMP'] = null;
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/updatecrunchbasetechnologyroundtwo',conditionTwo,{'params':this.httpParams});
  }

  deleteConditionTwo(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/conditiononetofour/deletecrunchbasetechnologyroundtwo/'+id,{'params':this.httpParams});
  }

  saveConditionTwo(conditionTwo){
    conditionTwo['CREATED TIMESTAMP'] = null;
    conditionTwo['MODIFIED TIMESTAMP'] = null;
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/savecrunchbasetechnologyroundtwo',conditionTwo,{'params':this.httpParams});
  }
}
