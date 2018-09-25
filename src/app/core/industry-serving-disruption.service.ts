import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class IndustryServingDisruptionService {

  constructor(private http: HttpClient) { }

  getAllIndustryServingDisruptionMaster(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/industryservingdisruption/getallindustryservingdisruption?ver='+randomValue);
  }
}
