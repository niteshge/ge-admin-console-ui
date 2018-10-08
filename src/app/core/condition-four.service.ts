import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConditionFourService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllConditionFour(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditiononetofour/getallcrunchbasetechnologyroundfour?ver='+randomValue, {'params':this.httpParams});
  }

  updateConditionFour(conditionFour:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/updatecrunchbasetechnologyroundfour',conditionFour,{'params':this.httpParams});
  }

  updateConditionFourForIndustryType(conditionFour:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/updatecrunchbasetechnologyroundfourforindustrytype',conditionFour, {'params':this.httpParams});
  }


  saveConditionFourForIndustryType(conditionFour:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/addcrunchbasetechnologyroundfourforindustrytype',conditionFour, {'params':this.httpParams});
  }

  deleteConditionFour(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/conditiononetofour/deletecrunchbasetechnologyroundfour/'+id,{'params':this.httpParams});
  }

  saveConditionFour(conditionThree){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/savecrunchbasetechnologyroundfour',conditionThree,{'params':this.httpParams});
  }

  getConditionFourForIndustryType(marketMap:any, randomValue:Number){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/getCondition4ForIndustryType',marketMap,{'params':this.httpParams});
  }
}
