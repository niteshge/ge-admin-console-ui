import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConditionFourService {

  constructor(private http: HttpClient) { }

  getAllConditionFour(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/conditiononetofour/getallcrunchbasetechnologyroundfour?ver='+randomValue);
  }

  updateConditionFour(conditionFour:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/updatecrunchbasetechnologyroundfour',conditionFour);
  }

  updateConditionFourForIndustryType(conditionFour:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/updatecrunchbasetechnologyroundfourforindustrytype',conditionFour);
  }


  saveConditionFourForIndustryType(conditionFour:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/addcrunchbasetechnologyroundfourforindustrytype',conditionFour);
  }

  deleteConditionFour(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/conditiononetofour/deletecrunchbasetechnologyroundfour/'+id);
  }

  saveConditionFour(conditionThree){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/savecrunchbasetechnologyroundfour',conditionThree);
  }

  getConditionFourForIndustryType(marketMap:any, randomValue:Number){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/getCondition4ForIndustryType',marketMap);
  }
}
