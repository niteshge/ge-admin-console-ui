import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConditionOneService {

  httpParams = new HttpParams().set('authorization_token', `Token ${this.auth.getToken()}`);
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllConditionOne(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditiononetofour/getallcrunchbasetechnologyroundone?ver='+randomValue,{'params':this.httpParams});
  }

  getAllConditionKeywordNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/conditionkeywords/getallconditionkeywordNames?ver='+randomValue,{'params':this.httpParams});
  }

  updateConditionOne(conditionOne:any){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/updatecrunchbasetechnologyroundone',conditionOne,{'params':this.httpParams});
  }

  deleteConditionOne(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/api/conditiononetofour/deletecrunchbasetechnologyroundone/'+id,{'params':this.httpParams});
  }

  saveConditionOne(conditionOne){
    return this.http.post('http://'+myGlobals.server+':8787/api/conditiononetofour/savecrunchbasetechnologyroundone',conditionOne,{'params':this.httpParams});
  }
  checkTechnologySubSegmentExistInConditionOneToFour(technologyOldSubSegmentId:number,technologyId:number, action:number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/techsubsegment/checktechnologysubsegmentexistenceforconditions?technologyOldSubSegmentId='+technologyOldSubSegmentId+'&technologyId='+technologyId+'&action='+action+'&randomValue='+randomValue,{'params':this.httpParams});
  }

  checkIndustrySubSegmentExistInConditionOneToFour(industryOldSubSegmentId:number,industryId:number, action:number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/api/industrysubsegment/checkindustrysubsegmentexistenceforconditions?industryOldSubSegmentId='+industryOldSubSegmentId+'&industryId='+industryId+'&action='+action+'&randomValue='+randomValue,{'params':this.httpParams});
  }

}
