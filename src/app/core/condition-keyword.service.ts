import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConditionKeywordService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }


  getAllConditionKeywordNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditionkeywords/getallconditionkeywordNames?ver='+randomValue, {'params':this.httpParams});
  }
  getAllConditionKeywords(randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditionkeywords/getallconditionkeywords?ver='+randomValue,{'params':this.httpParams});
  }
  updateConditionKeywords(conditionKeyword:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditionkeywords/updateconditionkeyword',conditionKeyword,{'params':this.httpParams});
  }

  deleteConditionKeywords(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/conditionkeywords/deleteconditionkeyword/'+id,{'params':this.httpParams});
  }

  saveConditionKeywords(conditionKeyword){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditionkeywords/saveconditionkeyword',conditionKeyword,{'params':this.httpParams});
  }
}
