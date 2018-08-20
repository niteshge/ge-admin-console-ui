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
    return this.http.get('http://'+myGlobals.server+':8787/conditiononetofive/getallcrunchbasetechnologyroundone?ver='+randomValue);
  }

  getAllCrunchbaseKeywords(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/crunchbase/getallcrunchbasekeywords?ver='+randomValue);
  }

  updateConditionOne(conditionOne:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofive/updatecrunchbasetechnologyroundone',conditionOne);
  }

  deleteBusinessSolutions(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/conditiononetofive/deletecrunchbasetechnologyroundone/'+id);
  }

  saveBusinessSolutions(conditionOne){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofive/savecrunchbasetechnologyroundone',conditionOne);
  }

}
