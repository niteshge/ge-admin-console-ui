import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConditionOneService {

  constructor(private http: HttpClient) { }

  getAllConditionOne(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/conditiononetofour/getallcrunchbasetechnologyroundone?ver='+randomValue);
  }

  getAllConditionKeywordNames(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/conditionkeywords/getallconditionkeywordNames?ver='+randomValue);
  }

  updateConditionOne(conditionOne:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/updatecrunchbasetechnologyroundone',conditionOne);
  }

  deleteConditionOne(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/conditiononetofour/deletecrunchbasetechnologyroundone/'+id);
  }

  saveConditionOne(conditionOne){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/savecrunchbasetechnologyroundone',conditionOne);
  }
  checkTechnologySubSegmentExistInConditionOneToFour(technologyOldSubSegmentId:number,technologyId:number, action:number, randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/techsubsegment/checktechnologysubsegmentexistenceforconditions?technologyOldSubSegmentId='+technologyOldSubSegmentId+'&technologyId='+technologyId+'&action='+action+'&randomValue='+randomValue);
  }

}
