import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class BusinessTractionService {

  constructor(private http: HttpClient) { }

  getAllBusinessTractionMaster(randomValue:number) {
    return this.http.get('http://'+myGlobals.server+':8787/businesstraction/getallbusinesstraction?ver='+randomValue);
  }
}
