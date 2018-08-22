import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConditionKeywordService {

  constructor(private http: HttpClient) { }


  getAllConditionKeywordNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/conditionkeywords/getallconditionkeywordNames?ver='+randomValue);
  }
  getAllConditionKeywords(randomValue:number){
    return this.http.get('http://'+myGlobals.server+':8787/conditionkeywords/getallconditionkeywords?ver='+randomValue);
  }
  updateConditionKeywords(conditionKeyword:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditionkeywords/updateconditionkeyword',conditionKeyword);
  }

  deleteConditionKeywords(id:number){
    return this.http.delete('http://'+myGlobals.server+':8787/conditionkeywords/deleteconditionkeyword/'+id);
  }

  saveConditionKeywords(conditionKeyword){
    return this.http.post('http://'+myGlobals.server+':8787/conditionkeywords/saveconditionkeyword',conditionKeyword);
  }
}
