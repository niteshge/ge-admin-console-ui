import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConditionTwoService {

  constructor(private http: HttpClient) { }

  
  getAllConditionTwo(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/conditiononetofour/getallcrunchbasetechnologyroundtwo?ver='+randomValue);
  }

  updateConditionTwo(conditionTwo:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/updatecrunchbasetechnologyroundtwo',conditionTwo);
  }

  deleteConditionTwo(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/conditiononetofour/deletecrunchbasetechnologyroundtwo/'+id);
  }

  saveConditionTwo(conditionTwo){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/savecrunchbasetechnologyroundtwo',conditionTwo);
  }
}
