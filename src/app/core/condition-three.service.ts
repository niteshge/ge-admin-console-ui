import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as myGlobals from '../app-globals';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConditionThreeService {


  constructor(private http: HttpClient) { }

  getAllConditionThree(randomValue:Number){
    return this.http.get('http://'+myGlobals.server+':8787/conditiononetofour/getallcrunchbasetechnologyroundthree?ver='+randomValue);
  }

  updateConditionThree(conditionThree:any){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/updatecrunchbasetechnologyroundthree',conditionThree);
  }

  deleteConditionThree(id:Number){
    return this.http.delete('http://'+myGlobals.server+':8787/conditiononetofour/deletecrunchbasetechnologyroundthree/'+id);
  }

  saveConditionThree(conditionThree){
    return this.http.post('http://'+myGlobals.server+':8787/conditiononetofour/savecrunchbasetechnologyroundthree',conditionThree);
  }
}
